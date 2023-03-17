import Home from "./pages/Home";
import Article from "./pages/Article";
import ArticlesList from "./pages/ArticlesList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="max-wscreen-md max-auto pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article" element={<Article />} />
          <Route path="/article-list" element={<ArticlesList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
