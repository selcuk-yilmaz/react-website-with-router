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
              <a className="active" id="home" href="index.html">
                Home
              </a>
            </li>
            <li>
              <a id="about" href="about.html">
                About
              </a>
            </li>
            <li>
              <a id="services" href="services.html">
                Services
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
