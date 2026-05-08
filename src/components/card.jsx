import React from "react";
import cybersecuritypic from "./asset/cybersecuritypic.png";
import shamapic from "./asset/shamapic.png";
import emmanuelpic from "./asset/emmanuelpic.png";
import shama from "./asset/shamapic8.jpg"
import pato from "./asset/shamapic7.jpg"
import witaba from "./asset/shamapic5.jpg"
import paul from "./asset/shamapic4.jpg"
import keziah from "./asset/shamapic3.jpg"
import ezra from "./asset/shamapic2.jpg"
import sharon from "./asset/shamapic7.jpg"
import grace from "./asset/shamapic3.jpg"
import faith from "./asset/shamapic2.jpg"
import coro from "./asset/shamapic8.jpg"
import coro from "./asset/shamapic8.jpg"
import "./card.css";

function Card() {
  return (
    <>
   <section className="cards">
    <div  className="card">

      <img src={shama} alt="Cybersecurity" />
      <h2>This is my cybersecurity image Card</h2>
        
   </div>
   <div className="card">
    <img src={cybersecuritypic} alt="cybersecuritypic" />
    <h2>this is shama's pc </h2>
   </div>
   <div className="card">
     <img src={cybersecuritypic} alt="cybersecuritypic" />
    <h2>this is shama's pc </h2>
   </div>
   <div className="card">
     <img src={shamapic} alt="shamapic" />
    <h2>this is shama's pc </h2>
   </div>
   <div className="card">
     <img src={} alt="shamapic" />
    <h2>this is shama's pc </h2>
   </div>
   <div className="card">
     <img src={shamapic} alt="shamapic" />
    <h2>this is shama's pc </h2>
   </div>
   <div className="card">
     <img src={emmanuelpic} alt=" emmanuelpic" />
    <h2>this is shama's pc </h2>
   </div>
   <div className="card">
     <img src={ emmanuelpic} alt=" emmanuelpic" />
    <h2>this is shama's pc </h2>
   </div>
   <div className="card">
     <img src={ emmanuelpic} alt=" emmanuelpic" />
    <h2>this is shama's pc </h2>
   </div>
   </section>
    </>
  );
}

export default Card;