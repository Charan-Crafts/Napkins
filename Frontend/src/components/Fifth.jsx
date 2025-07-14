import React from "react";
import "./Fifth.css";

import step6 from "../assets/step6.png";
import step7 from "../assets/step7.png";
import step8 from "../assets/step8.png";
import step9 from "../assets/step9.png";

function Third() {
  const steps = [step6, step7, step8, step9];

  return (
    <section className="scroll-section">
      <div className="left-sticky">
        {/* <div className="step-number"></div> */}
        <h1>
          <span className="highlght-text">Use Cases</span><br />
          
        </h1>
        <p className="left-description">
          Captivate your audience with auto-generated infographics, diagrams, mind maps, flowcharts, data charts, and more.
        </p>
      </div>

      <div className="right-scroll">
        {steps.map((img, index) => (
          <div className="card" key={index}>
            <img src={img} alt={`Step ${index + 1}`} className="step-image" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Third;
