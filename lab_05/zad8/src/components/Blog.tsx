import { Link } from "react-router-dom";

export interface ArticleProps {
  id: number;
  title: string;
  body: string;
}

function Blog() {
  const data = localStorage.getItem("blogs");
  const blogs = data ? JSON.parse(data) : [];

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
      <h1>Blogi:</h1>
      <Link
        to="/dodaj"
        style={{
          color: "black",
          padding: "0.5rem 1.5rem",
          borderRadius: "12px",
          fontWeight: "bold",
          backgroundColor: "lightgreen",
        }}
      >
        Dodaj Artykuł
      </Link>
      <ul>
        {blogs.map((article: ArticleProps) => (
          <li key={article.id} style={{ margin: "2rem" }}>
            <Link
              to={`/article/${article.id}`}
              style={{
                textDecoration: "none",
                color: "#333",
                fontWeight: "bold",
                fontSize: "1.1rem",
              }}
            >
              {article.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Blog;
