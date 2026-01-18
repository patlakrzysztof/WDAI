import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

interface ArticleProps {
  id: number;
  title: string;
  body: string;
}

function AddArticle() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    const data = localStorage.getItem("blogs");
    const blogs = data ? JSON.parse(data) : [];
    blogs.push({ id: Date.now(), title: title, body: body });
    localStorage.setItem("blogs", JSON.stringify(blogs));
    navigate("/blog");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <h1
          style={{
            color: "black",
            padding: "0.5rem 1.5rem",
            borderRadius: "12px",
            fontWeight: "bold",
            backgroundColor: "lightgreen",
            width: "100%",
          }}
        >
          Dodaj Artykuł:
        </h1>
        <div>
          <input
            type="text"
            placeholder="Tytuł"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
            style={{
              padding: "0.75rem 1rem",
              fontSize: "1rem",
              borderRadius: "10px",
              border: "1px solid #ccc",
              width: "100%",
            }}
          />
        </div>
        <div>
          <textarea
            placeholder="Treść"
            onChange={(e) => setBody(e.target.value)}
            value={body}
            required
            style={{
              padding: "0.75rem 1rem",
              fontSize: "1rem",
              borderRadius: "10px",
              width: "100%",
              border: "1px solid #ccc",
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            padding: "0.75rem 2rem",
            fontSize: "1.1rem",
            fontWeight: "bold",
            color: "white",
            backgroundColor: "#ff7373",
            border: "none",
            borderRadius: "12px",
          }}
        >
          DODAJ
        </button>
      </form>
    </div>
  );
}

export default AddArticle;
