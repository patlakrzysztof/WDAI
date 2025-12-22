import { useState } from "react";

function Counter() {
  let [counter, setCount] = useState(0);

  const add = () => setCount(counter + 1);

  return (
    <div>
      <p>{counter}</p>
      <button onClick={add}>Dodaj</button>
    </div>
  );
}

export default Counter;
