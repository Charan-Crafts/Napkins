import React from 'react';
import './Second.css';
import flow1 from '../assets/flow.png';
import flow2 from '../assets/flow2.png';

function Second() {
  return (
    <section className="how-it-works">
      <h2 className="hiw-title">How it works</h2>

      <div className="hiw-content step step-1">
        <div className="hiw-text">
          <div className="step-number">1</div>
          <h3 className="hiw-heading">
            Start by <span className="highlight-green">Importing</span> or <span className="highlight-green">Pasting</span> your text
          </h3>
          <p className="hiw-subtext">
            Forget prompting, Napkin works directly from your text.
          </p>
        </div>
        <div className="hiw-image">
          <img src={flow1} alt="Step 1" />
        </div>
      </div>

      {/* Step 2 */}
      <div className="hiw-content step step-2">
        <div className="hiw-text">
          <div className="step-number">2</div>
          <h3 className="hiw-heading">
            <span className="highlight-blue">Click ⚡</span> to <br /> generate visuals
          </h3>
          <p className="hiw-subtext">
            Napkin generates the most relevant visuals based on your text, then you pick the one that best expresses what you have in mind.
          </p>
        </div>
        <div className="hiw-image">
          <img src={flow2} alt="Step 2" />
        </div>
      </div>
    </section>
  );
}

export default Second;
