import React from "react";
import image from "../../images/tara-picture.jpg";
import Footer from "../footer";
import "./style.css";

const HomePicture = () => {
  return (
    <>
      <section className="home-picture">
        <img className="picture" src={image} alt="home" />
        <span>Photo by Tara Evans on Unsplash</span>
      </section>
      <Footer />
    </>
  );
};

export default HomePicture;
