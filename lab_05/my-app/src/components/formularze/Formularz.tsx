import { useState } from "react";

function Form() {
  const [text, setText]: any = useState("");

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        placeholder="Wpisz tekst"
      ></input>
      <p>{text}</p>
    </div>
  );
}

export default Form;
