import React from "react";
import "./Forth.css";
import step4 from "../assets/flow3.png";

function Fourth() {
  return (
    <section className="step-4">
      <div className="step4-text">
        <div className="step4-number">4</div>
        <h3 className="step4-heading">
          <span className="highlight-purple">Take</span> it anywhere
        </h3>
        <p className="step4-subtext">
          Visuals created in Napkin can be used anywhere. Export them as .ppt, .png, .pdf or .svg to upgrade your content.
        </p>
        <div className="export-buttons">
          <button className="export-btn">📄 PPT file</button>
          <button className="export-btn">📄 PDF file</button>
          <button className="export-btn">📄 PNG file</button>
          <button className="export-btn">📄 SVG file</button>
        </div>
      </div>

      <div className="step4-image">
        <img src={step4} alt="Step 4" />
      </div>
    </section>
  );
}

export default Fourth;
