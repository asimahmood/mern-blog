import Home from "./pages/Home";
import Article from "./pages/Article";
import ArticlesList from "./pages/ArticlesList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import NavBar from "./components/NavBar";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="max-wscreen-md max-auto pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/article/:name" element={<Article />} />
          <Route path="/article-list" element={<ArticlesList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
