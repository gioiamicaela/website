import React from "react";
import SwiperComponent from "../components/SwiperComponent";
import SwiperComponentLader from "../components/SwiperComponentLader";
import "bootstrap/dist/css/bootstrap.min.css";
import Collapse from "react-bootstrap/Collapse";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";

function LandingPage() {
  const [open, setOpen] = React.useState(false);
  const [openLader, setOpenLader] = React.useState(false);

  return (
    <div className="container">
      <div className="row" style={{ marginTop: "15%" }}>
        <div className="col-12">
          <h1 className="hero-heading">
            <span className="herow line-1">
              <span className="split-words">Junior FullStack</span>
            </span>
            <span className="herow">
              <span className="split-words"> Developer</span>
            </span>
          </h1>
        </div>
      </div>
      <div className="row" style={{ marginTop: "4%" }}>
        <div className="col-12">
          <p className="hero-intro-text">
            I am a student of Computing Engineering and experienced accountant.
            I am a highly skilled professional and after more than 10 years of
            experience working with different projects and multidisciplinary
            teams I decided to turn my career in a different direction and
            become a Software Developer.
          </p>
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
      </div>
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
                  fontWeight: "400",
                  lineHeight: "1.4",
                }}
              >
                Hackflix: click on the image to go to website
              </h2>
              <div className="row">
                <div className="col-12 d-flex align-items-center">
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
                  {!open && (
                    <h3
                      style={{
                        opacity: ".5",
                        fontSize: "0.95em",
                        fontWeight: "400",
                        lineHeight: "1.4",
                        paddingTop: "5px",
                      }}
                    >
                      Read more
                    </h3>
                  )}
                </div>
              </div>

              <Collapse in={open}>
                <div
                  className="my-3"
                  id="example-collapse-text"
                  style={{
                    opacity: ".5",
                    fontSize: "1.0em",
                    fontWeight: "400",
                    lineHeight: "1.4",
                  }}
                >
                  To create this project I used React, React Hooks and Redux.
                  The data source is the API The Movie Database. In order to be
                  responsive I used bootstrap.
                </div>
              </Collapse>
            </div>
          </div>
          <div className="row">
            <div className="col-12 mt-2">
              <SwiperComponent />
            </div>
          </div>
        </div>
        <div className="col-12 ">
          <div className="row">
            <div className="col-12 mt-5 mb-3">
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
              <div className="row">
                <div className="col-12 d-flex align-items-center">
                  <Button
                    onClick={() => setOpenLader(!openLader)}
                    aria-controls="example-collapse-text"
                    aria-expanded={openLader}
                    style={{
                      backgroundColor: "transparent",
                      border: "transparent",
                      color: "black",
                    }}
                  >
                    <i className="fa-solid fa-chevron-down"></i>
                  </Button>
                  {!openLader && (
                    <h3
                      style={{
                        opacity: ".5",
                        fontSize: "0.95em",
                        fontWeight: "400",
                        lineHeight: "1.4",
                        paddingTop: "5px",
                      }}
                    >
                      Read more
                    </h3>
                  )}
                </div>
              </div>
              <Collapse in={openLader}>
                <div
                  className="my-3"
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
                  Nodejs, Express and MongoDB. In order to be responsive we used
                  bootstrap.
                </div>
              </Collapse>
            </div>
          </div>
          <div className="row">
            <div className="col-12 mt-2 mb-5">
              <SwiperComponentLader />
            </div>
          </div>
        </div>
      </div>
      <ScrollToTop
        smooth
        color={"black"}
        style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
      />
    </div>
  );
}

export default LandingPage;
