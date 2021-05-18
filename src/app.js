import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Projets from "./Projets";
import Contact from "./Contact";
import Design from "./Design";
import Web from "./Web";
import Menu from "./Menu";
import DarkMode from "./DarkMode";
import Modal from 'react-modal';
import ReactDOM from "react-dom";
import { useTranslation, Trans } from "react-i18next";

Modal.setAppElement('#root')

export default function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };
  
  return (
    <div className="App">
      {/* <div className="App-header">
        <h1>{t("Bienvenue sur notre Blog")}</h1>
       
      </div> */}

      <HashRouter>
          <div className="main-container">
            <div className="navigation">
              <ul className="nav-list">
                  <li className="nav-links"><NavLink exact to="/"><Trans>Accueil</Trans></NavLink></li>
                  <li className="nav-links"><NavLink to="/projets"><Trans>Projets</Trans></NavLink></li>
                    <ul className="nav-sublist">
                      <li className="nav-sublinks"><NavLink to="/projets/graphisme-maquettes"><Trans>Graphisme</Trans></NavLink></li>
                      <li className="nav-sublinks"><NavLink to="/projets/web"><Trans>Web</Trans></NavLink></li>
                    </ul>
                  <li className="nav-links"><NavLink to="/contact"><Trans>Contact</Trans></NavLink></li>
              <div className ="nav-options">
                <div className='langSelect'>
                  <button onClick={() => changeLanguage("fr")} class='langBtn' value='lang'>fr</button>
                  <button onClick={() => changeLanguage("en")} class='langBtn' value='lang'>en</button>
                </div>
                <div className="dark-mode"><DarkMode /></div>
              </div>
              </ul>
              
              
          </div>
          <div class="bm-container"><Menu pageWrapId={"page-wrap"} outerContainerId={"App"} /></div>
          
            <div id="page-wrap" className="content ">
                <Route exact path="/" component={Home}/>
                <Route path="/projets" component={Projets}/>
                <Route path="/projets/graphisme-maquettes" component={Design}/>
                <Route path="/projets/web" component={Web}/>
                <Route path="/contact" component={Contact}/>
            </div>
          </div>
        </HashRouter>
    </div>
  );
}

// ReactDOM.render(<App />, appElement);