import { useState } from "react";
import AddButton from "./Przycisk";

function NewCounter() {
  let [counter, setCount]: any = useState(0);

  const add = () => setCount(counter + 1);

  return (
    <div>
      <p>{counter}</p>
      <AddButton onClick={add} />
    </div>
  );
}

export default NewCounter;
