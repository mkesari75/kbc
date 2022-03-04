import { useEffect, useState } from "react";

export default function Tiktok({ setTimeOut, questionNumber, stopTimer }) {
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    if (stopTimer) return clearInterval(setTimer(timer));
    if (timer === 0) return setTimeOut(true);
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer, setTimeOut, stopTimer]);

  useEffect(() => {
    setTimer(30);
  }, [questionNumber]);
  return timer;
}
