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
    <form onSubmit={handleSubmit}>
      <h1>Dodaj Artykuł:</h1>
      <div>
        <input
          type="text"
          placeholder="Tytuł"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          required
        />
      </div>
      <div>
        <textarea
          placeholder="Treść"
          onChange={(e) => setBody(e.target.value)}
          value={body}
          required
        />
      </div>
      <button type="submit">DODAJ</button>
    </form>
  );
}

export default AddArticle;
