import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./render/LandingPage";
import AboutMe from "./render/AboutMe";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ScrollToTopLink from "./components/ScrollToTopLink";

function App() {
  return (
    <div>
      <Header />
      <ScrollToTopLink>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about-me" element={<AboutMe />} />
        </Routes>
      </ScrollToTopLink>
      <Footer />
    </div>
  );
}

export default App;
