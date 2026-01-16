import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
// test
// import Welcome from "./components/Welcome";
// import Goodbye from "./components/Goodbye";

import Zad1 from "./zad/zad1";
import Zad2 from "./zad/zad2";
import Zad3 from "./zad/zad3";
import Zad4 from "./zad/zad4";
import Zad5 from "./zad/zad5";
import Zad6 from "./zad/zad6";
import Zad7 from "./zad/zad7";

<div>
  {/* test
      <Welcome name="Sara" />
      <Welcome name="Jan" />
      <Goodbye name="Jan" /> */}
</div>;

function App() {
  return (
    <BrowserRouter>
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/1">Zad1</Link>| <Link to="/2">Zad2</Link>|{" "}
        <Link to="/3">Zad3</Link>| <Link to="/4">Zad4</Link>|{" "}
        <Link to="/5">Zad5</Link>| <Link to="/6">Zad6</Link>|{" "}
        <Link to="/7">Zad7</Link>
      </nav>

      <Routes>
        <Route path="/1" element={<Zad1 />} />
        <Route path="/2" element={<Zad2 />} />
        <Route path="/3" element={<Zad3 />} />
        <Route path="/4" element={<Zad4 />} />
        <Route path="/5" element={<Zad5 />} />
        <Route path="/6" element={<Zad6 />} />
        <Route path="/7" element={<Zad7 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
