import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  return (
    <>
      <div className="row mb-5">
        <div className="col-6 mt-5 d-flex justify-content-start align-items-center">
          <img src="/logo.png" alt="logo" style={{ height: "5rem" }} />
        </div>
        <div className="col-6 d-flex justify-content-end align-items-center mt-5">
          {location.pathname === "/about-me" ? (
            <Link to="/">
              <button
                className="contact-button"
                style={{
                  borderRadius: "30px",
                  padding: "10px",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  fontSize: "1em",
                  lineHeight: "1.2",
                }}
              >
                HOME
              </button>
            </Link>
          ) : (
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
          )}
        </div>
      </div>
    </>
  );
}

export default Header;
