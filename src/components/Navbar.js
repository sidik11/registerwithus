import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Collapse from "bootstrap/js/dist/collapse";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../components/Common/Navbar.css";

function Navbar() {
  const handleNavLinkClick = () => {
    const navbar = document.getElementById("navbarNav");
    const bsCollapse = Collapse.getInstance(navbar);
    if (bsCollapse) {
      bsCollapse.hide();
    }
  };

  useEffect(() => {
    const submenuElements = document.querySelectorAll('.dropdown-submenu');

    const mouseEnterHandler = (event) => {
      const submenu = event.currentTarget.querySelector('.dropdown-menu');
      if (submenu) {
        submenu.classList.add('show');
      }
    };

    const mouseLeaveHandler = (event) => {
      const submenu = event.currentTarget.querySelector('.dropdown-menu');
      if (submenu) {
        submenu.classList.remove('show');
      }
    };

    submenuElements.forEach((element) => {
      element.addEventListener('mouseenter', mouseEnterHandler);
      element.addEventListener('mouseleave', mouseLeaveHandler);
    });

    return () => {
      submenuElements.forEach((element) => {
        element.removeEventListener('mouseenter', mouseEnterHandler);
        element.removeEventListener('mouseleave', mouseLeaveHandler);
      });
    };
  }, []);

  const preventDefault = (e) => e.preventDefault();

  return (
    <nav className="navbar navbar-expand-lg py-3">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src="img/logo.png" alt="Logo" className="me-2" />
          REGISTER WITH US
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <i className="fas fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">

            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={handleNavLinkClick}>
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={handleNavLinkClick}>
                About Us
              </Link>
            </li>

            {/* Services Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="servicesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onClick={preventDefault}
              >
                Services
              </a>

              <ul className="dropdown-menu" aria-labelledby="servicesDropdown">

                <li>
                  <a className="dropdown-item" href="#">Service 1</a>
                </li>

                <li className="dropdown-submenu">
                  <a
                    className="dropdown-item dropdown-toggle"
                    href="#"
                    onClick={preventDefault}
                  >
                    Service 2
                  </a>

                  <ul className="dropdown-menu">

                    <li>
                      <a className="dropdown-item" href="#">Service 2.1</a>
                    </li>

                    <li className="dropdown-submenu">
                      <a
                        className="dropdown-item dropdown-toggle"
                        href="#"
                        onClick={preventDefault}
                      >
                        Service 2.2
                      </a>

                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Service 2.2.1</a></li>
                        <li><a className="dropdown-item" href="#">Service 2.2.2</a></li>
                        <li><a className="dropdown-item" href="#">Service 2.2.3</a></li>
                        <li><a className="dropdown-item" href="#">Service 2.2.4</a></li>
                        <li><a className="dropdown-item" href="#">Service 2.2.5</a></li>
                      </ul>
                    </li>

                    <li><a className="dropdown-item" href="#">Service 2.3</a></li>
                    <li><a className="dropdown-item" href="#">Service 2.4</a></li>
                    <li><a className="dropdown-item" href="#">Service 2.5</a></li>

                  </ul>
                </li>

                <li><a className="dropdown-item" href="#">Service 3</a></li>
                <li><a className="dropdown-item" href="#">Service 4</a></li>
                <li><a className="dropdown-item" href="#">Service 5</a></li>

              </ul>
            </li>

            <li class="nav-item dropdown">
              <a data-mdb-dropdown-init class="nav-link dropdown-toggle" href="#"
                id="navbarDropdownMenuLinkRight" role="button" data-mdb-toggle="dropdown"
                aria-expanded="false">
                Dropdown link
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLinkRight">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li>
                  <a class="dropdown-item" href="#"> Submenu &raquo; </a>
                  <ul class="dropdown-menu dropdown-submenu dropdown-submenu-left">
                    <li>
                      <a class="dropdown-item" href="#">Submenu item 1</a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">Submenu item 2</a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">Submenu item 4</a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">Submenu item 5</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/blogs" onClick={handleNavLinkClick}>
                Blogs
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={handleNavLinkClick}>
                Contact Us
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
