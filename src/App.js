import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./render/LandingPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
}

export default App;
