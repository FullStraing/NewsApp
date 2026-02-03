import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PostsList from "./pages/PostsList";
import PostDetail from "./pages/PostDetail";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Routes>
          <Route path="/" element={<Navigate to="/posts" replace />} />
          <Route path="/posts" element={<PostsList />} />
          <Route path="/posts/:id" element={<PostDetail />} />
          <Route
            path="*"
            element={
              <div className="page">
                <h1 className="page-title">Page not found</h1>
                <p className="muted">
                  The page you are looking for does not exist.
                </p>
              </div>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
