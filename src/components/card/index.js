import React from "react";
import "./style.css";

const Card = props => {
  const { item } = props;
  console.log(item.photo);
  return (
    <div className="card">
      <img
        className="modele-photo"
        src={process.env.PUBLIC_URL + item.photo}
        alt="modele"
      />
      <span>Difficulté:{item.difficulte}</span>
    </div>
  );
};

export default Card;
