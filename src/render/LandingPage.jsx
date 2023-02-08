import React from "react";
import SwiperComponent from "../components/SwiperComponent";
import SwiperComponentLader from "../components/SwiperComponentLader";
import "bootstrap/dist/css/bootstrap.min.css";
import Collapse from "react-bootstrap/Collapse";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function LandingPage() {
  const [language, setLanguage] = React.useState("en");
  const [open, setOpen] = React.useState(false);

  return (
    <div className="container">
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
        <Link to="/about-me">
          <button
            className="contact-button my-5"
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
                style={{
                  opacity: ".5",
                  fontSize: "1.4em",
                  fontWeight: "400",
                  lineHeight: "1.4",
                }}
              >
                Hackflix: click on the image to go to website
              </h2>
              <Button
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
                style={{
                  backgroundColor: "transparent",
                  border: "transparent",
                  color: "black",
                }}
              >
                <i className="fa-solid fa-chevron-down"></i>
              </Button>
              <Collapse in={open}>
                <div
                  className="mt-2"
                  id="example-collapse-text"
                  style={{
                    opacity: ".5",
                    fontSize: "1.0em",
                    fontWeight: "400",
                    lineHeight: "1.4",
                  }}
                >
                  To create this project I used React, React Hooks and Redux.
                  The data source is the API The Movie Database.
                </div>
              </Collapse>
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
                style={{
                  opacity: ".5",
                  fontSize: "1.4em",
                  fontWeight: "400",
                  lineHeight: "1.4",
                }}
              >
                Laderhack: click on the image to go to website
              </h2>
              <Button
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
                style={{
                  backgroundColor: "transparent",
                  border: "transparent",
                  color: "black",
                }}
              >
                <i className="fa-solid fa-chevron-down"></i>
              </Button>
              <Collapse in={open}>
                <div
                  className="mt-2"
                  id="example-collapse-text"
                  style={{
                    opacity: ".5",
                    fontSize: "1.0em",
                    fontWeight: "400",
                    lineHeight: "1.4",
                  }}
                >
                  This was the final project for the Bootcamp. We were asked to
                  create an e-commerce in three weeks in a group of four
                  teammates. The most important technologies used were React,
                  Nodejs, Express and MongoDB.
                </div>
              </Collapse>
            </div>
          </div>
          <div className="row">
            <div className="col-12 m-2">
              <SwiperComponentLader />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
