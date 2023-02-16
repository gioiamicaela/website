import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      {" "}
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
                <i
                  className="fa-brands fa-linkedin fs-5 px-2"
                  style={{ color: "black" }}
                ></i>
              </button>
            </Link>
          </div>
        </div>
        <div className="hire-me">
          <div className="hire-me-text">Hire Me</div>
        </div>
      </div>
    </>
  );
}

export default Footer;
