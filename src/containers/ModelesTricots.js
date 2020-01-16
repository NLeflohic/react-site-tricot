import React from "react";
import Card from "../components/card";
import { modelesHommes } from "../Global";
import "./ModelesTricots.css";

const ModelesTricots = props => {
  const { categorie } = props;
  let tabModeles = [];
  let icon;
  console.log(categorie);
  // useEffect(() => {
  if (categorie === "hommes") {
    tabModeles = Array.from(new Set(modelesHommes));
    icon = "homme.png";
  }
  //
  console.log(tabModeles);
  return (
    <section className="background-modeles wrapper">
      <div className="left-side mg-top">
        <div className="icon-div mg-top">
          <img
            src={process.env.PUBLIC_URL + "/images/" + icon}
            alt="icon-cat"
            className="icon-categorie"
          />
        </div>
      </div>
      <section className="modeles">
        <div className="background-card mg-top">
          {tabModeles.map(item => {
            return <Card key={item.ref} item={item} />;
          })}
        </div>
      </section>
    </section>
  );
};

export default ModelesTricots;
