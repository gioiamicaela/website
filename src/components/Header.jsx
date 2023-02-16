import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const sendEmail = () => {
    window.open(
      "mailto:gioiamicaela@gmail.com?subject=SendMail&body=Description"
    );
  };

  return (
    <>
      <div className="container">
        <div className="row mb-5">
          <div className="col-6 mt-5 d-flex justify-content-start align-items-center">
            <Link to="/">
              {" "}
              <img src="/logo.png" alt="logo" style={{ height: "5rem" }} />
            </Link>
            {location.pathname === "/about-me" && (
              <Link
                to="/"
                style={{
                  padding: "10px",
                  fontSize: "0.9vw",
                  lineHeight: "1.2",
                  marginLeft: "5px",
                  color: "black",
                  textDecoration: "none",
                }}
              >
                HOME
              </Link>
            )}
            {location.pathname === "/" && (
              <Link
                to="/about-me"
                style={{
                  padding: "10px",
                  fontSize: "0.9vw",
                  lineHeight: "1.2",
                  marginLeft: "5px",
                  color: "black",
                  textDecoration: "none",
                }}
              >
                ABOUT ME
              </Link>
            )}
          </div>
          <div className="col-6 d-flex justify-content-end align-items-center mt-5">
            <button
              className="contact-button"
              style={{
                borderRadius: "30px",
                padding: "10px",
                fontSize: "0.9vw",
                lineHeight: "1.2",
              }}
              onClick={sendEmail}
            >
              CONTACT ME
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
