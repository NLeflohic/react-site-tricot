import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Footer = props => {
  const handleClick = () => {
    props.setHomePage(false);
  };
  return (
    <footer className="footer">
      <Link to="mentions" style={{ textDecoration: "none" }}>
        <span className="footer-item">Mentions légales</span>
      </Link>
      <Link
        to="/contact"
        style={{ textDecoration: "none" }}
        onClick={handleClick}
      >
        <span className="footer-item">Contactez-nous</span>
      </Link>
      <Link to="cgv" style={{ textDecoration: "none" }}>
        <span className="footer-item">Conditions générales de vente</span>
      </Link>
    </footer>
  );
};

export default Footer;
