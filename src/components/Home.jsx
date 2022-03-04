import React, { useEffect, useState } from "react";
import styled from "styled-components";
import prize from "../prize";
import data from "../data";
import Tiktok from "./Tiktok";
import useSound from "use-sound";
import intro from "../assets/intro.mp3";
import lock from "../assets/lock.mp3";
import next from "../assets/next.mp3";
import correct from "../assets/correct.mp3";
import wrong from "../assets/wrong.mp3";
import Start from "./Start";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #020230;
  color: white;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

const Left = styled.div`
  width: 75%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), #020230),
    url("https://miro.medium.com/max/1400/1*_fYZEiDvWWTSV_TjrW_CsA.jpeg") center;
  background-size: cover;
  display: flex;
  flex-direction: column;
`;

const Endtext = styled.div`
  position: relative;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  color: gold;
  font-size: 20px;
  text-shadow: 2px 2px black;
`;

const Top = styled.div`
  height: 50%;
  position: relative;
  display: flex;
  justify-content: center;
`;

const Timer = styled.div`
  height: 70px;
  width: 70px;
  background-color: #100241;
  border: 4px solid white;
  border-radius: 50%;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 45px;
  margin: 5px;

  &.animation {
    animation: timer 10s ease forwards;
    animation-delay: 20s;
  }

  @keyframes timer {
    0%,
    20%,
    40%,
    60%,
    80%,
    100% {
      background-color: red;
    }
    10%,
    30%,
    50%,
    70%,
    90% {
      background-color: #100241;
    }
  }
`;

const Bottom = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Question = styled.div`
  width: 80%;
  padding: 10px;
  border: 4px solid white;
  border-radius: 20px;
  text-align: center;
  font-size: 25px;
  font-weight: 800;
  background: linear-gradient(#100241, black);
`;

const Options = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 60px;
`;

const Option = styled.div`
  width: 40%;
  border: 1px solid white;
  text-align: center;
  padding: 10px;
  background: linear-gradient(#0e0124, #22074d);
  border-radius: 10px;
  font-size: 20px;
  font-weight: 300;
  margin: 0 10px 20px 10px;
  cursor: pointer;

  &.active {
    background: mediumblue;
    color: gold;
    border: 1px solid gold;
  }

  &.correct {
    animation: correct 3s ease forwards;
  }

  &.wrong {
    animation: wrong 3s ease forwards;
  }

  @keyframes correct {
    0%,
    22%,
    42% {
      background: mediumblue;
    }
    20%,
    40%,
    60% {
      background: linear-gradient(#0e0124, #22074d);
    }
    62%,
    100% {
      background: darkgreen;
    }
  }

  @keyframes wrong {
    0%,
    22%,
    42% {
      background: mediumblue;
    }
    20%,
    40%,
    60% {
      background: linear-gradient(#0e0124, #22074d);
    }
    62%,
    100% {
      background: darkred;
    }
  }

  &:hover {
    border: 1px solid gold;
    color: gold;
  }
`;

const Value = styled.span`
  float: left;
  color: gold;
`;

const Answer = styled.span``;

const Right = styled.div`
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const MoneyList = styled.ul`
  list-style: none;
  width: 90%;
  padding: 10px;
`;

const MoneyListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 6px;
  background-color: ${(props) => props.active && "rgba(128,0,128,0.3)"};
  border: ${(props) => props.active && "1px solid gold"};
  border-radius: ${(props) => props.active && "10px "};
  color: ${(props) => props.active && "gold"};
`;

const MoneyListItemNumber = styled.span`
  font-size: 18px;
  font-weight: 100;
  margin-right: 15px;
`;

const MoneyListItemAmount = styled.span`
  font-size: 20px;
  font-weight: 300;
`;

const Home = () => {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [timeOut, setTimeOut] = useState(false);
  const [question, setQuestion] = useState(null);
  const [selected, setSelected] = useState(null);
  const [active, setActive] = useState("");
  const [earned, setEarned] = useState("₹ 0");
  const [username, setUsername] = useState(null);
  const [stopTimer, setStopTimer] = useState(false);
  const [stopTimerAnimation, setStopTimerAnimation] = useState("animation");

  const [theme] = useSound(intro);
  const [lockQue] = useSound(lock);
  const [nextQue] = useSound(next);
  const [wrongAns] = useSound(wrong);
  const [correctAns] = useSound(correct);

  useEffect(() => {
    theme();
  }, [theme]);

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
    nextQue();
  }, [questionNumber, nextQue]);

  useEffect(() => {
    questionNumber === 1 && username && nextQue();
  }, [nextQue, questionNumber, username]);

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(prize.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber]);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  const handleClick = (ans) => {
    lockQue();
    setSelected(ans);
    setActive("active");
    setStopTimer(true);
    setStopTimerAnimation("");
    delay(2000, () => setActive(ans.correct ? "correct" : "wrong"));
    delay(5000, () => {
      if (ans.correct) {
        correctAns();
        delay(2000, () => {
          delay(1000, () => {
            if (questionNumber !== 15) {
              setStopTimerAnimation("animation");
              setQuestionNumber((prev) => prev + 1);
              setSelected(null);
              setStopTimer(false);
            } else {
              setEarned("7 Crores");
              setTimeOut(true);
            }
          });
        });
      } else {
        wrongAns();
        delay(2000, () => {
          setTimeOut(true);
        });
      }
    });
  };

  return (
    <Container>
      <Wrapper>
        {username ? (
          <>
            <Left>
              {timeOut ? (
                <Endtext>
                  <h1>You WON : {earned}</h1>
                </Endtext>
              ) : (
                <>
                  <Top>
                    <Timer className={stopTimerAnimation}>
                      <Tiktok
                        setTimeOut={setTimeOut}
                        questionNumber={questionNumber}
                        stopTimer={stopTimer}
                      />
                    </Timer>
                  </Top>
                  <Bottom>
                    <Question key={question?.id}>{question?.question}</Question>
                    <Options>
                      {question?.answers.map((ans) => (
                        <>
                          <Option
                            key={ans.key}
                            className={selected === ans && active}
                            onClick={() => handleClick(ans)}
                          >
                            <Value>{ans.value}</Value>
                            <Answer>{ans.text}</Answer>
                          </Option>
                        </>
                      ))}
                    </Options>
                  </Bottom>
                </>
              )}
            </Left>
            <Right>
              <MoneyList>
                {prize.map((p) => (
                  <MoneyListItem
                    active={questionNumber === p.id && "active"}
                    key={p.id}
                  >
                    <MoneyListItemNumber>{p.id}</MoneyListItemNumber>
                    <MoneyListItemAmount>{p.amount}</MoneyListItemAmount>
                  </MoneyListItem>
                ))}
              </MoneyList>
            </Right>
          </>
        ) : (
          <Start setUsername={setUsername} />
        )}
      </Wrapper>
    </Container>
  );
};

export default Home;
