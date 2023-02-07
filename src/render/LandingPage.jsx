import React from "react";
import SwiperComponent from "../components/SwiperComponent";

function LandingPage() {
  const [language, setLanguage] = React.useState("en");

  return (
    <div className="container">
      <div className="row">
        <div className="col-6 mt-5 d-flex justify-content-start align-items-center">
          <img src="/logo.png" alt="logo" style={{ height: "5rem" }} />
        </div>
        <div className="col-6 d-flex justify-content-end align-items-center mt-5">
          <button style={{ borderRadius: "30px", padding: "10px" }}>
            CONTACT
          </button>
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
              <h2 className="hero-description">
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
              <h2 className="hero-description">
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
      </div>
    </div>
  );
}

export default LandingPage;
