import { useRef } from "react";
import styled from "styled-components";

const Container = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(128, 0, 128, 0.4)),
    url("https://miro.medium.com/max/1400/1*_fYZEiDvWWTSV_TjrW_CsA.jpeg") center;
  background-size: cover;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
`;

const Input = styled.input`
  margin: 10px;
  height: 30px;
  width: 300px;
  font-size: 18px;
  text-align: center;
  outline: none;
  background: transparent;
  color: gold;
  border: none;
  text-shadow: 2px 2px black;
  border-bottom: 3px solid gold;
  margin-bottom: 20px;
  &::placeholder {
    color: gold;
    font-weight: 700;
  }
`;

const Button = styled.button`
  height: 40px;
  width: 300px;
  border: none;
  cursor: pointer;
  font-size: 18px;
  font-weight: 700;
  background-color: #020230;
  color: white;
  text-shadow: 2px 2px black;
  &:hover {
    background-color: #100241;
  }
`;

const Header = styled.h1`
  color: gold;
  text-shadow: 2px 2px black;
  padding-bottom: 70px;
`;

const Start = ({ setUsername }) => {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.value && setUsername(inputRef.current.value);
  };

  return (
    <Container>
      <Header>LETS BEGIN!</Header>
      <Input type="text" placeholder="Enter Your Name" ref={inputRef} />
      <Button onClick={handleClick}>START</Button>
    </Container>
  );
};

export default Start;
