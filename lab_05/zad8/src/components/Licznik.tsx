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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "2rem 10rem",
        padding: "1rem",
        backgroundColor: "#f9f9f9",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        justifyContent: "center",
      }}
    >
      <p
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "3rem",
          fontWeight: "bolder",
        }}
      >
        {counter}
      </p>
      <button
        onClick={add}
        style={{
          padding: "0.75rem 2rem",
          fontSize: "1.2rem",
          fontWeight: "bold",
          borderRadius: "12px",
          border: "none",
          color: "white",
          backgroundColor: "blue",
        }}
      >
        Dodaj
      </button>
    </div>
  );
}

export default Counter;
