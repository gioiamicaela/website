import React from "react";
import foto from "./fotoMicaela.jpg";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";

function AboutMe() {
  return (
    <div className="container mb-5">
      <div className="row" style={{ marginTop: "20%" }}>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <img
            style={{
              borderRadius: "100%",
              height: "20vh",
              marginBottom: "10%",
            }}
            src={foto}
            alt="Foto Micaela"
          />
          <h4 className="mb-3">REACH OUT TO ME</h4>
          <div className="row">
            <div className="col-1 col-sm-2 col-xxl-1">
              <Link
                className="px-2"
                target="_blank"
                to="https://www.linkedin.com/in/micaela-gioia/"
              >
                <i
                  class="fa fa-map-marker"
                  aria-hidden="true"
                  style={{ color: "black" }}
                ></i>
              </Link>
            </div>
            <div className="col-11 col-sm-9 col-xxl-11">
              <Link
                className="px-2"
                target="_blank"
                to="https://www.linkedin.com/in/micaela-gioia/"
                style={{ textDecoration: "none", color: "black" }}
              >
                Madrid, Spain
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-1 col-sm-2 col-xxl-1">
              <Link
                className="px-2"
                target="_blank"
                to="https://www.linkedin.com/in/micaela-gioia/"
              >
                <i
                  class="fa fa-envelope"
                  aria-hidden="true"
                  style={{ color: "black" }}
                ></i>
              </Link>
            </div>
            <div className="col-11 col-sm-9 col-xxl-11">
              <Link
                className="px-2"
                target="_blank"
                to="https://www.linkedin.com/in/micaela-gioia/"
                style={{ textDecoration: "none", color: "black" }}
              >
                gioiamicaela@gmail.com
              </Link>
            </div>
          </div>

          <div className="row">
            <div className="col-1 col-sm-2 col-xxl-1">
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
            </div>
            <div className="col-11 col-sm-9 col-xxl-11">
              <Link
                className="px-2"
                target="_blank"
                to="https://www.linkedin.com/in/micaela-gioia/"
                style={{ textDecoration: "none", color: "black" }}
              >
                @micaela-gioia
              </Link>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-8 col-lg-9 mt-5">
          <p>
            My name is Micaela Gioia, I am an accountant and in 2020 I decided
            to change my professional carreer and started studying Computing
            Engineering at Universidad de Palermo (remote).
          </p>
          <p>
            In 2022 I decided to pause my studies at Universidad de Palermo for
            one semester and do a Coding Bootcamp in order to be more prepared
            for work. The coding bootcamp is a 3-month course in which I
            invested more than 600 hours of practice to strengthen my knowledge
            of tecnologies like Node.js, JavaScript, MongoDB, mySQL, React and
            more.
          </p>
          <p>
            Since then I have retaken my studies at University remotely and have
            worked at the startup Haidi.io as a FullStack Developer for six
            months.
          </p>
          <p>
            I consider my self a fast learner, hard working, determined and
            objective oriented. My objective right now is to learn as much as I
            can and become the best IT professional I can possibly be. I have a
            very good level of English.
          </p>
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

export default AboutMe;
