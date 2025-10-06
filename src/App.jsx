import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import About from "./pages/About";
import Projects from "./pages/Projects";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/about" replace />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}
