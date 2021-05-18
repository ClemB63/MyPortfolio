import React, { Component } from "react";
import { useTranslation, Trans } from "react-i18next";
import {NavLink,} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
 
class Projets extends Component {
  render() {
    return (
      <div>
        <h3 className="nav-choice">
          <Trans>Que voulez-vous voir?</Trans>
          <FontAwesomeIcon className="icon" icon={faArrowDown} />
          </h3>
        <ul className="nav-sublist--projets">
          <li className="nav-button--projets">
            <NavLink to="/projets/graphisme-maquettes">
              <Trans>
                Graphisme
              </Trans>
            </NavLink>
          </li>
          <li className="nav-button--projets">
            <NavLink to="/projets/web">
              <Trans>
                Web
              </Trans>
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}
 
export default Projets;