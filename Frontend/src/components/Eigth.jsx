import React from 'react';
import './Eigth.css';
import { Link } from 'react-router-dom'; 

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-left">
          <h3>Napkin</h3>

          <p>© 2025 Napkin AI</p>
        </div>

        <div className="footer-links">
          <div>
            <h4>Product</h4>
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>How it works</Link>
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>Use cases</Link>
            <Link to="/pricing" onClick={() => window.scrollTo(0, 0)}>Pricing</Link>
            <a href="#">Help center</a>
          </div>
          <div>
            <h4>Company</h4>
            <Link to="/AboutUs" onClick={() => window.scrollTo(0, 0)}>About us</Link>
            <Link to="/Blog" onClick={() => window.scrollTo(0, 0)}>Blog</Link>
            <a href="#">Contact us</a>
          </div>
          <div>
            <h4>Privacy</h4>
            <Link to="/TandC" onClick={() => window.scrollTo(0, 0)}>Terms and conditions</Link>
            <Link to="/privacy" onClick={() => window.scrollTo(0, 0)}>Privacy Policy</Link>
          </div>
        </div>

        <div className="footer-social">
          <i className="fab fa-discord"></i>
          <i className="fab fa-x-twitter"></i>
          <i className="fab fa-linkedin"></i>
          <i className="fab fa-facebook"></i>
        </div>
      </div>

    </footer>
  );
}

export default Footer;
