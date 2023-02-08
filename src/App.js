import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./render/LandingPage";
import AboutMe from "./render/AboutMe";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about-me" element={<AboutMe />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
