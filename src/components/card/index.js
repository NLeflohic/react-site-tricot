import React from "react";
import "./style.css";
import Basket from "../../images/basket.png";
import Archive from "../../images/archive.png";

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
      <div className="detail-container">
        <div className="detail">
          <span className="span-center">{item.nom}</span>
          <span className="span-label">Difficulté:{item.difficulte}</span>
          <div className="info-fichier span-label">
            <span>Prix :</span>
            <span>{item.prix} €</span>
          </div>
          {item.prix === 0 ? (
            <div className="info-fichier span-label">
              <span>Télécharger</span>
              <img src={Archive} alt="archive" className="icon-detail" />
            </div>
          ) : (
            <div className="info-fichier span-label">
              <span>Commander</span>
              <img src={Basket} alt="panier" className="icon-detail" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
