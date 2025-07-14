import React from 'react';
import './First.css'; 
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="icon-badge">⚡</div>
        <div className="highliht-text">
          <h1>Get visuals <br /> from your text</h1>
        </div>
        <p className="subtext">
          Napkin turns your text into visuals so sharing your ideas is quick and effective.
        </p>
        <Link to="/signin"
          style={{
            display: 'inline-block',
            backgroundColor: '#333',
            color: '#fff',
            fontWeight: 600,
            fontSize: '1.1rem',
            padding: '10px 28px',
            borderRadius: '2rem',
            boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
            textDecoration: 'none',
            transition: 'background 0.3s',
            border: 'none',
            marginTop: 30,
          }
        }
          onMouseOver={e => e.currentTarget.style.backgroundColor = '#111'}
          onMouseOut={e => e.currentTarget.style.backgroundColor = '#333'}
        >
          Get Napkin Free →
        </Link>
      </div>
    </section>
  );                                                            
}

export default Hero;                                                            
