import "./navbar.css";
import logo from "../assets/logo.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      <ul className="navbar-center">
        {/* <li className="nav-link">Home</li> */}
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/pricing" className="nav-link">Pricing</Link>
        <Link to="/AboutUs" className="nav-link">About Us</Link>
        <Link to="/Blog" className="nav-link">Blog</Link>
      </ul>

      <div className="navbar-right">
        {/* <a href="#" className="signin">Sign In</a>
         */}
         <Link to="/signin" className="signin">Sign In</Link>
        <button className="cta-button">
          <Link to="/signup" className="free">Get Napkin Free <span className="arrow">→</span></Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;