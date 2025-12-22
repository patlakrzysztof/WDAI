import { useState } from "react";

function Password() {
  let response;
  const [password, setPassword] = useState("");
  const [repPassword, setRepPassword] = useState("");

  if (password === "") {
    response = "Proszę wprowadzić hasło";
  } else if (password !== repPassword) {
    response = "Hasła nie są zgodne";
  } else {
    response = "";
  }

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Hasło"
      ></input>
      <input
        type="text"
        onChange={(e) => setRepPassword(e.target.value)}
        placeholder="Powtórz hasło"
      ></input>
      <p>{response}</p>
    </div>
  );
}

export default Password;
