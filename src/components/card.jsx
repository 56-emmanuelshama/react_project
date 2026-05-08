import React from "react";
import cybersecuritypic from "./asset/cybersecuritypic.png";
import shamapic from "./asset/shamapic.png";
import emmanuelpic from "./asset/emmanuelpic.png";
import shama from "./asset/shamapic1.jpg";
import pato from "./asset/shamapic2.jpg";
import witaba from "./asset/shamapic3.jpg";
import keziah from "./asset/shamapic5.jpg";
import ezra from "./asset/shamapic6.jpg";
import sharon from "./asset/shamapic8.jpg";

import "./card.css";

function Card() {
  return (
    <section className="cards">
      <div className="card">
        <img src={shama} alt="shama" />
        <h2>This is my cybersecurity image Card</h2>
      </div>

      <div className="card">
        <img src={pato} alt="pato" />
        <h2>This is Shama's PC</h2>
      </div>

      <div className="card">
        <img src={witaba} alt="witaba" />
        <h2>This is Shama's PC</h2>
      </div>

      <div className="card">
        <img src={keziah} alt="keziah" />
        <h2>This is Shama's PC</h2>
      </div>

      <div className="card">
        <img src={ezra} alt="ezra" />
        <h2>This is Shama's PC</h2>
      </div>

      <div className="card">
        <img src={sharon} alt="sharon" />
        <h2>This is Shama's PC</h2>
      </div>

      <div className="card">
        <img src={cybersecuritypic} alt="cybersecurity" />
        <h2>Cybersecurity Image</h2>
      </div>

      <div className="card">
        <img src={shamapic} alt="shamapic" />
        <h2>Shama Profile</h2>
      </div>

      <div className="card">
        <img src={emmanuelpic} alt="emmanuelpic" />
        <h2>Emmanuel Profile</h2>
      </div>
    </section>
  );
}

export default Card;