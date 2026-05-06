import React from "react";
import cybersecuritypic from "./asset/cybersecuritypic.png";
import shamapic from "./asset/shamapic.png";
import emmanuelpic from "./asset/emmanuelpic.png";
import "./card.css";

function Card() {
  return (
    <>
   <section className="cards">
    <div  className="card">

      <img src={cybersecuritypic} alt="Cybersecurity" />
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
     <img src={shamapic} alt="shamapic" />
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