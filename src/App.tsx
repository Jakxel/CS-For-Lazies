// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import TopicsCSPage from "./components/pages/TopicsCSPage";
import TechPage from "./components/pages/TechPage";
import OthersPage from "./components/pages/OthersPage";
import "../src/styles/ContentPage.css"

function App() {
  return (
    <Router>
      <div className="Display">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/topics-cs" element={<TopicsCSPage />} />
          <Route path="/tech" element={<TechPage />} />
          <Route path="/others" element={<OthersPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
