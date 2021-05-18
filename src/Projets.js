import React, { Component } from "react";
import { useTranslation, Trans } from "react-i18next";
 
class Projets extends Component {
  render() {
    return (
      <div>
        <h2 class="page-title"><Trans>Projets</Trans></h2>
        <p>Mauris sem velit, vehicula eget sodales vitae,
        rhoncus eget sapien:</p>
      </div>
    );
  }
}
 
export default Projets;