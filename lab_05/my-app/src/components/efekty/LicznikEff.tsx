import { useEffect, useState } from "react";

function CounterEff() {
  let [counter, setCount]: any = useState(0);

  const add = () => {
    setCount(counter + 1);
  };

  useEffect(() => {
    console.log("Hello world");
  }, []);

  useEffect(() => {
    console.log(`Licznik zwiększył się do ${counter}`);
  }, [counter]);

  return (
    <div>
      <p>{counter}</p>
      <button onClick={add}>Dodaj</button>
    </div>
  );
}

export default CounterEff;
