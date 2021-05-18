import React, { Component } from "react";
import { useTranslation, Trans } from "react-i18next";
import illustration from "./images/profilepic.jpg"

 
class Home extends Component {
  render() {
    return (
      <div className="home">
        {/* <h2 className="page-title"><Trans>Accueil</Trans></h2> */}
        <div className="home-content">
          <div className="home-animation">
            <h3 className="typewriter-text--hello"><Trans>Bonjour</Trans></h3>
            <h3 className="typewriter-text--name"><Trans>Nom</Trans></h3>
            <h3 className="typewriter-text--job"><Trans>Design</Trans></h3>
            <h3 className="typewriter-text--job-2"><Trans>Code</Trans></h3>
            <h3 className="typewriter-text--qualities"><Trans>Creative</Trans></h3>
            <h3 className="typewriter-text--qualities-2"><Trans>Curieuse</Trans></h3>
            <h3 className="typewriter-text--qualities-3"><Trans>Polyvalente</Trans></h3>
            <h3 className="typewriter-text--conclusion"><Trans>Atout</Trans></h3>
          </div>
          {/* <div className="home-illustration">
          <img className="photo" src={illustration} alt="development" />
          </div> */}
        </div>
      </div>
    );
  }
}
 
export default Home;