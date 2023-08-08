import React from "react";
import FeatureBox from "./FeatureBox";
import _image1 from "../images/feature-1.png";
import _image2 from "../images/feature-2.png";
import _image3 from "../images/feature-3.png";
import _image4 from "../images/feature-4.png";

function Feature(){
  return (
    <div id="features" className="section">
      <h1>FEATURES</h1>
      <div className="a-container">
        <FeatureBox image={_image1} title="feature 1" />
        <FeatureBox image={_image2} title="feature 2" />
        <FeatureBox image={_image3} title="feature 3" />
        <FeatureBox image={_image4} title="feature 4" />
      </div>
    </div>
  );
}

export default Feature;