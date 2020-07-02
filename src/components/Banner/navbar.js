import React from "react";
import PropTypes from "prop-types";
import { Container } from "@material-ui/core";


function Navbar({ navItems, src, y }) {
  let Item = navItems.map((item) => (
    <li key={item.id} className="nav-item">
      <a className="nav-link text-white text-capitalize" href={item.link}>
        {item.name}
      </a>
    </li>
  ));
  return (
    <Container>
      <nav className="navbar navbar-expand-lg pt-4">
        <a href="/" className="navbar-brand text-white font-f">
          <img
            src={src}
            width="30"
            height="30"
            className="d-inline-block align-top mr-3"
            alt=".."
          />
          Samanad
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav justify-content-end">{Item}</ul>
        </div>
      </nav>
    </Container>
  );
}

Navbar.propTypes = {
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType(["number", "string"]),
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ),
  src: PropTypes.string.isRequired,
};

export default Navbar;
