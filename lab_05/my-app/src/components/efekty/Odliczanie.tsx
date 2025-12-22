import { useEffect, useState } from "react";

function Countdown() {
  const [counter, setCounter] = useState(15);
  const [running, setRunning] = useState(false);

  const buttonClicked = () => {
    setRunning((prev) => !prev);
  };

  useEffect(() => {
    if (counter <= 0) {
      setRunning(false);
      setCounter(0);
    }
  }, [counter]);

  useEffect(() => {
    if (running) {
      const interval = setInterval(() => {
        setCounter((prev) => prev - 0.1);
      }, 100);
      return () => clearInterval(interval);
    } else {
      return;
    }
  }, [running]);

  return (
    <div>
      <p>{counter.toFixed(1)}</p>
      <button onClick={buttonClicked} disabled={counter <= 0}>
        {counter <= 0 ? "Odliczanie zakończone" : running ? "Stop" : "Start"}
      </button>
    </div>
  );
}

export default Countdown;
