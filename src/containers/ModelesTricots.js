import React, { useEffect } from "react";
import Card from "../components/card";
import { modelesHommes } from "../Global";

const ModelesTricots = props => {
  const { categorie } = props;
  let tabModeles = [];
  console.log(categorie);
  // useEffect(() => {
  if (categorie === "hommes") {
    tabModeles = Array.from(new Set(modelesHommes));
  }
  //
  console.log(tabModeles);
  return (
    <section className="modeles wrapper">
      {tabModeles.map(item => {
        return <Card key={item.ref} item={item} />;
      })}
    </section>
  );
};

export default ModelesTricots;
