import { useEffect, useState } from "react";

function Counter() {
  let [counter, setCount]: any = useState(0);

  useEffect(() => {
    const savedCounter = localStorage.getItem("counter");
    if (savedCounter !== null) {
      setCount(Number(savedCounter));
    }
  }, []);

  const add = () => {
    setCount(counter + 1);
    localStorage.setItem("counter", counter + 1);
  };
  return (
    <div>
      <p>{counter}</p>
      <button onClick={add}>Dodaj</button>
    </div>
  );
}

export default Counter;
