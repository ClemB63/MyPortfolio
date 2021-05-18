import React, { Component } from "react";
import { useTranslation, Trans } from "react-i18next";
 
class Contact extends Component {
  render() {
    return (
      <div>
        <h2 class="page-title"><Trans>Contact</Trans></h2>
        <ul className="categories">
                <li>Python</li>
                <li>React</li>
                <li>Redux</li>
            </ul>
      </div>
    );
  }
}
 
export default Contact;