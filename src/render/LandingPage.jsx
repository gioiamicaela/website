import React from "react";
import SwiperComponent from "../components/SwiperComponent";
import SwiperComponentLader from "../components/SwiperComponentLader";
import { Link } from "react-router-dom";

function LandingPage() {
  const [language, setLanguage] = React.useState("en");

  return (
    <div className="container">
      <div className="row">
        <div className="col-6 mt-5 d-flex justify-content-start align-items-center">
          <img src="/logo.png" alt="logo" style={{ height: "5rem" }} />
        </div>
        <div className="col-6 d-flex justify-content-end align-items-center mt-5">
          <Link to="/about-me">
            <button
              className="contact-button"
              style={{
                borderRadius: "30px",
                padding: "10px",
                fontSize: "1em",
                lineHeight: "1.2",
              }}
            >
              ABOUT ME
            </button>
          </Link>
        </div>
      </div>
      <div className="row" style={{ marginTop: "20%" }}>
        <div className="col-9">
          <h1 className="hero-heading">Junior Full Stack Developer</h1>
        </div>
      </div>
      <did className="row" style={{ marginTop: "5%" }}>
        <div className="col-6">
          {language === "en" ? (
            <p className="hero-intro-text">
              I am a student of Computing Engineering and experienced
              accountant. I am a highly skilled professional and after more than
              10 years of experience working with different projects and
              multidisciplinary teams I decided to turn my career in a different
              direction and become a Software Developer.
            </p>
          ) : (
            <p className="hero-intro-text">
              Soy una estudiante de Licenciatura en Informática y una contadora
              experimentada. Soy una profesional altamente calificada que, con
              más de 10 años de experiencia trabajando en diferentes proyectos y
              equipos multidisciplinarios, decidí realizar un giro en mi carrera
              y tomar una dirección diferente para convertirme en una
              Desarrolladora de Software.
            </p>
          )}
        </div>
      </did>
      <hr />
      <div className="row">
        <h2>PROJECTS</h2>
      </div>
      <div className="row">
        <div className="col-12 ">
          <div className="row">
            <div className="col-12 mt-5">
              <h2
                className="hero-description"
                style={{ opacity: ".5", fontSize: "1em" }}
              >
                Hackflix: click on the image to go to website
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12 m-2">
              <SwiperComponent />
            </div>
          </div>
        </div>
        <div className="col-12 ">
          <div className="row">
            <div className="col-12 mt-5">
              <h2
                className="hero-description"
                style={{ opacity: ".5", fontSize: "1em" }}
              >
                Laderhack: click on the image to go to website
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12 m-2">
              <SwiperComponentLader />
            </div>
          </div>
        </div>
      </div>
      <hr className="mb-5" />
      <div className="row mb-5">
        <div className="col-12 d-flex justify-content-center"></div>
      </div>
      <div className="row">
        <div className="col-12">
          <h1 className="hire-title">
            Looking for a Junior FullStack Developer?
          </h1>
        </div>
      </div>
      <div className="section-cta">
        <div className="row">
          <div className="col-12 d-flex justify-content-center my-5">
            <Link
              target="_blank"
              to="https://www.linkedin.com/in/micaela-gioia/"
            >
              <button style={{ borderRadius: "30px", padding: "10px" }}>
                GET IN TOUCH{" "}
                <Link
                  className="px-2"
                  target="_blank"
                  to="https://www.linkedin.com/in/micaela-gioia/"
                >
                  <i
                    className="fa-brands fa-linkedin fs-5"
                    style={{ color: "black" }}
                  ></i>
                </Link>
              </button>
            </Link>
          </div>
        </div>
        <div class="hire-me">
          <div class="hire-me-text">Hire Me</div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
