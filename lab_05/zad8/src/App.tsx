import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Counter from "./components/Licznik";
import Blog from "./components/Blog";
import Article from "./components/Article";
import AddArticle from "./components/AddArticle";

function Home() {
  return (
    <div>
      <h1>Witaj!!!</h1>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Strona Główna</Link>| <Link to="/blog">Blogi</Link>|{" "}
        <Link to="/counter">Licznik</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/article/:id" element={<Article />} />
        <Route path="/dodaj" element={<AddArticle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
