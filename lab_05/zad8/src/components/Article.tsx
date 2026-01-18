import { useParams } from "react-router-dom";

interface ArticleProps {
  id: number;
  title: string;
  body: string;
}

function Article() {
  const { id } = useParams<{ id: string }>();
  const data = localStorage.getItem("blogs");
  const blogs = data ? JSON.parse(data) : [];
  const article = blogs.find((art: ArticleProps) => art.id === Number(id));

  if (!article) {
    return <p>Nie znaleziono artykułu</p>;
  }

  return (
    <div
      style={{
        margin: "2rem 10rem",
        padding: "1rem",
        backgroundColor: "#f9f9f9",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      }}
    >
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <p>ID: {article.id}</p>
    </div>
  );
}

export default Article;
