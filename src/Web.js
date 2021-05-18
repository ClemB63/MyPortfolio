import React, { Component } from "react";
import { useTranslation, Trans } from "react-i18next";
 
class Web extends Component {
  render() {
    return (
      <div>
        <h2><Trans>Developpement Web</Trans></h2>
        <p>Mauris sem velit, vehicula eget sodales vitae,
        rhoncus eget sapien:</p>
        <ul className="cards">
          <li className="cards__item">
            <div id="card" className="card">
              <div className="card__image card__image--fence"></div>
              <div className="card__content">
                <div className="card__title">Portfolio</div>
                <p className="card__text">Projet Personnel - En cours - React </p>
                <button className="btn btn--block card__btn">Vous-y êtes!</button>
              </div>
            </div>
          </li>
          <li className="cards__item">
            <div id="card" className="card">
              <div className="card__image card__image--river"></div>
              <div className="card__content">
                <div className="card__title">Atom Café</div>
                <p className="card__text">Projet d'école - Décembre 2020 - WORDPRESS-ELEMENTOR</p>
                <a href="http://ftp.clemenceballereau-webdeveloping.com/atomcafe/" className="btn btn--block card__btn">Allez voir!</a>
              </div>
            </div>
          </li>
          <li className="cards__item">
            <div id="card" className="card">
              <div className="card__image card__image--record"></div>
              <div className="card__content">
                <div className="card__title">Battleship</div>
                <p className="card__text">Projet d'école - Septembre 2020 - Javascript</p>
                <a href="http://ftp.clemenceballereau-webdeveloping.com/project-battleship/" className="btn btn--block card__btn">Allez voir!</a>
              </div>
            </div>
          </li>
          <li className="cards__item">
            <div id="card" className="card">
              <div className="card__image card__image--flowers"></div>
              <div className="card__content">
                <div className="card__title">Micheale Sidane - Diététique</div>
                <p className="card__text">Projet Professionnel - Janvier 2021 - WORDPRESS - ELEMENTOR</p>
                <a href="https://michaela-sidane-dietetique.fr/" className="btn btn--block card__btn">Allez voir!</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}
 
export default Web;