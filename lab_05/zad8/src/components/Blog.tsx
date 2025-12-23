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
    <div>
      <h1>Blogi:</h1>
      <Link to="/dodaj">Dodaj Artykuł</Link>
      <ul>
        {blogs.map((article: ArticleProps) => (
          <li key={article.id}>
            <Link to={`/article/${article.id}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Blog;
