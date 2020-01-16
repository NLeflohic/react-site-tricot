import React, { useState } from "react";
import { Link } from "react-router-dom";
import homeIcon from "../../images/home_icon.png";
import "./style.css";

const Menu = props => {
  const [currentMenu, setCurrentMenu] = useState("");

  return (
    <section className="menu wrapper">
      <Link to="/home" style={{ textDecoration: "none" }}>
        <img
          src={homeIcon}
          alt="icon"
          className="icon"
          onClick={() => {
            props.setHomePage(true);
            setCurrentMenu("");
          }}
        />
      </Link>
      <Link to="/hommes" style={{ textDecoration: "none" }}>
        <span
          className={
            currentMenu === "hommes" ? "menu-item selected" : "menu-item"
          }
          onClick={() => {
            props.setHomePage(false);
            setCurrentMenu("hommes");
          }}
        >
          Hommes
        </span>
      </Link>
      <Link to="/femmes" style={{ textDecoration: "none" }}>
        <span
          className={
            currentMenu === "femmes" ? "menu-item selected" : "menu-item"
          }
          onClick={() => {
            props.setHomePage(false);
            setCurrentMenu("femmes");
          }}
        >
          Femmes
        </span>
      </Link>
      <Link to="/enfants" style={{ textDecoration: "none" }}>
        <span
          className={
            currentMenu === "enfants" ? "menu-item selected" : "menu-item"
          }
          onClick={() => {
            props.setHomePage(false);
            setCurrentMenu("enfants");
          }}
        >
          Enfants
        </span>
      </Link>
      <Link to="/accessoires" style={{ textDecoration: "none" }}>
        <span
          className={
            currentMenu === "accessoires" ? "menu-item selected" : "menu-item"
          }
          onClick={() => {
            props.setHomePage(false);
            setCurrentMenu("accessoires");
          }}
        >
          Accessoires
        </span>
      </Link>
    </section>
  );
};

export default Menu;
