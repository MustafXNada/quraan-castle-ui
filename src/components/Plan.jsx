import { React, useState } from "react";
import { Link as LinkPage } from "react-router-dom";
import PlanBox from './PlanBox';
function Plan() {
  const [plans] = useState([
    { name: "AC", price: "20 $", duration: "30 weeks" },
    { name: "DD", price: "30 $", duration: "50 weeks" },
    { name: "DTF", price: "30 $", duration: "50 weeks" },
  ]);
  return (
    <div id="plans" className="section">
        <h1>PLANS</h1>
      <section className="pricing-plans">
        {plans.map((plan) => (
          <PlanBox
            key={plan.name}
            name={plan.name}
            duration={plan.duration}
            price={plan.price}
          />
        ))}

      </section>
    </div>
  );
}

export default Plan;