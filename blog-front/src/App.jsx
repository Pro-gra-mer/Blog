import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./NavBar";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ArticleListPage } from "./pages/ArticleListPage";
import { ArticlePage } from "./pages/ArticlePage";
import { LoginPage } from "./pages/LoginPage";
import { CreateUser } from "./pages/CreateUser";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <h1>Aprendiendo React</h1>
        <div id="page-body">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/new-user" element={<CreateUser />} />
            <Route path="/blog" element={<ArticleListPage />} />
            <Route path="/blog/:articleId" element={<ArticlePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
