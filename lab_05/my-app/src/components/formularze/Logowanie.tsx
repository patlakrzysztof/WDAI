import { useState } from "react";

function Login() {
  let response: string;
  const [password, setPassword]: any = useState("");
  const [repPassword, setRepPassword]: any = useState("");
  const [username, setUsername]: any = useState("");

  const handleClick = () => {
    if (password !== repPassword) {
      alert("Hasła nie są zgodne");
    } else {
      alert("Zalogowano pomyślnie");
    }
  };

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
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Nazwa Użytkownika"
      ></input>
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
      <button
        onClick={handleClick}
        disabled={username === "" || password === "" || repPassword === ""}
      >
        Logowanie
      </button>
    </div>
  );
}

export default Login;
