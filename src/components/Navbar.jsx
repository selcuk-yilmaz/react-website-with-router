import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="left-navbar">
          <h1>
            <span>Clarusway </span>Web Design
          </h1>
        </div>
        <div className="right-navbar">
          <ul className="nav-link">
            <li>
              <Link className="active" id="home" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link id="about" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link id="services" to="/services">
                Services
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
