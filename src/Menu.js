import React from "react";
import {NavLink,} from "react-router-dom";
import DarkMode from "./DarkMode";
import { useTranslation, Trans } from "react-i18next";
import { slide as Menu } from "react-burger-menu";

export default props => {

    const { t, i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    // Pass on our props
    <Menu {...props}>
      <ul className="nav-list">
                <li className="nav-links menu-item"><NavLink exact to="/"><Trans>Accueil</Trans></NavLink></li>
                <li className="nav-links menu-item"><NavLink to="/projets"><Trans>Projets</Trans></NavLink></li>
                  <ul className="nav-sublist">
                    <li className="nav-sublinks menu-item"><NavLink to="/projets/graphisme-maquettes"><Trans>Graphisme</Trans></NavLink></li>
                    <li className="nav-sublinks menu-item"><NavLink to="/projets/web"><Trans>Web</Trans></NavLink></li>
                  </ul>
                <li className="nav-links menu-item"><NavLink to="/contact"><Trans>Contact</Trans></NavLink></li>
                <div className ="nav-options">
                <div className='langSelect'>
                  <button onClick={() => changeLanguage("fr")} class='langBtn' value='lang'>fr</button>
                  <button onClick={() => changeLanguage("en")} class='langBtn' value='lang'>en</button>
                </div>
                <div className="dark-mode"><DarkMode /></div>
              </div>
      </ul>
    </Menu>
  );
};