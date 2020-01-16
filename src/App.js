import React, { useState } from "react";
import { MemoryRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Menu from "./components/menu";
import HomePicture from "./components/homePicture";
import ModelesTricots from "./containers/ModelesTricots";
import Contact from "./containers/Contact";
import "./reset.css";
import "./App.css";

function App() {
  const [homePage, setHomePage] = useState(true);
  return (
    <>
      <Router>
        <Header />
        <div className="page-container">
          <Menu homePage={homePage} setHomePage={setHomePage} />
          {homePage ? (
            <HomePicture />
          ) : (
            <Switch>
              <Route path="/home">
                <HomePicture />
              </Route>
              <Route path="/hommes">
                <ModelesTricots categorie="hommes" />
              </Route>
              <Route path="/femmes">
                <ModelesTricots categorie="femmes" />
              </Route>
              <Route path="/enfants">
                <ModelesTricots categorie="enfants" />
              </Route>
              <Route path="accessoires">
                <ModelesTricots categorie="accessoires" />
              </Route>
              <Route path="/mentions">
                <ModelesTricots categorie="accessoires" />
              </Route>
              <Route path="/cgv">
                <ModelesTricots categorie="accessoires" />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
            </Switch>
          )}
        </div>
        <Footer homePage={homePage} setHomePage={setHomePage} />
      </Router>
    </>
  );
}

export default App;
