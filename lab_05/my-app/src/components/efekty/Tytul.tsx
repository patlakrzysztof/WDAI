import { useEffect, useState } from "react";

function Title() {
  const [title, setTitle] = useState("");

  useEffect(() => {
    (document.title = title || "No title"), [title];
  });

  return (
    <input
      type="text"
      placeholder="Nowy tytuł"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
    ></input>
  );
}

export default Title;
