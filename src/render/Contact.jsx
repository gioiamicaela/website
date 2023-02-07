import React from "react";
import foto from "./fotoMicaela.jpg";

function Contact() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <img src={foto} alt="Foto Micaela" />
        </div>
        <div className="col-9"></div>
      </div>
    </div>
  );
}

export default Contact;
