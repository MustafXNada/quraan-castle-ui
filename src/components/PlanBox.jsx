import React from "react";

function PlanBox({name,price,duration}) {
  return (
    <div className="pricing-card basic">
      <div className="heading">
        <h4>{name}</h4>
        <p>for small websites or blogs</p>
      </div>
      <p className="price">
        {price}
        <sub>/month</sub>
      </p>
      <ul className="features">
        <li>
          <i className="fa-solid fa-check"></i>
          <strong>1 domain</strong> name
        </li>
        <li>
          <i className="fa-solid fa-check"></i>
          <strong>10 GB</strong> of disk space
        </li>
        <li>
          <i className="fa-solid fa-check"></i>
          <strong>100GB </strong>of bandwidth
        </li>
        <li>
          <i className="fa-solid fa-check"></i>
          <strong>1 MySQL</strong> database
        </li>
        <li>
          <i className="fa-solid fa-check"></i>
          <strong>5 email</strong> accounts
        </li>
        <li>
          <i className="fa-solid fa-check"></i>
          <strong>cPanel</strong> control panel
        </li>

      </ul>
  
    </div>
  );
}
export default PlanBox;