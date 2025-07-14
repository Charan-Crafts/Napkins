import React from "react";
import "./Third.css";

import step1 from "../assets/step1.png";
import step2 from "../assets/step2.png";
import step3 from "../assets/step3.png";
import step4 from "../assets/step4.png";
import step5 from "../assets/step5.png";

function Third() {
  const steps = [step1, step2, step3, step4, step5];

  return (
    <section className="scroll-section">
      <div className="left-sticky">
        <div className="step-numer">3</div>
        <h1>
          <span className="highlight-text">Polish</span> it up,<br />
          make it yours
        </h1>
        <p className="left-description">
          Napkin visuals are fully editable, so you can adjust content and style to maximize their impact.
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
