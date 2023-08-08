import React from "react";
import image1 from "../images/logo.png";
function About() {
  return (
    <div id="about" className="section">
      <div className="about-image">
        <img src={image1} alt="Quraan Castle" width={500} height={500} />
      </div>
      <div className="about-text">
        <h1>ABOUT US</h1>
        <p>
        Welcome to Quran castle providing quality Quran , Arabic , Islamic studies classes for non Arabic speakers of all ages world wide   </p>
        <button className="x-btn">READ MORE</button>
      </div>
    </div>
  );
}

export default About;