// import React from "react";
// import ReactDOM from "react-dom";
// import Main from "./Main";
// import "./index.css";
// import "./i18n";
// import App from "./Main";
 
// ReactDOM.render(
//      <Main/>,
//   document.getElementById("root")
// );

import React from "react";
import ReactDOM from "react-dom";

import "./i18n";
import App from "./app";
import "./index.css";

// append app to dom
ReactDOM.render(<App />, document.getElementById("root"));