import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./render/LandingPage";
import Contact from "./render/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about-me" element={<Contact />} />
    </Routes>
  );
}

export default App;
