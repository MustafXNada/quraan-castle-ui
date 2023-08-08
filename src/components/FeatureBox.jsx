import React from "react";

function FeatureBox(props)
{
  return(
    <div className="a-box">
      <div className="a-b-img">
        <img src={props.image} alt='' />
      </div>
      <div className="a-b-text">
        <h2>{props.title}</h2>
        <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
      </div>
    </div>
  )
}

export default FeatureBox;