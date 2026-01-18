import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Counter from "./components/Licznik";
import Blog from "./components/Blog";
import Article from "./components/Article";
import AddArticle from "./components/AddArticle";

function Home() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          color: "black",
          padding: "0.5rem 1.5rem",
          borderRadius: "12px",
          fontWeight: "bold",
          backgroundColor: "lightgreen",
        }}
      >
        Witaj na stronie z blogami!!!
      </h1>
    </div>
  );
}

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        minWidth: "100vh",
        backgroundColor: "lavender",
      }}
    >
      <BrowserRouter>
        <nav
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            width: "100%",
            backgroundColor: "lightblue",
            padding: "1rem",
          }}
        >
          <Link
            to="/"
            style={{
              color: "white",
              padding: "0.5rem 1.5rem",
              borderRadius: "12px",
              fontWeight: "bold",
              backgroundColor: "#cb3030",
            }}
          >
            Strona Główna
          </Link>
          <Link
            to="/blog"
            style={{
              color: "white",
              padding: "0.5rem 1.5rem",
              borderRadius: "12px",
              fontWeight: "bold",
              backgroundColor: "#cb3030",
            }}
          >
            Blogi
          </Link>
          <Link
            to="/counter"
            style={{
              color: "white",
              padding: "0.5rem 1.5rem",
              borderRadius: "12px",
              fontWeight: "bold",
              backgroundColor: "#cb3030",
            }}
          >
            Licznik
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/article/:id" element={<Article />} />
          <Route path="/dodaj" element={<AddArticle />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
