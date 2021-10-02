"use strict";

// JSX - Javascript XML
var root = document.getElementById('root');
var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
  id: "header"
}, "Hello World"), /*#__PURE__*/React.createElement("div", null, "Lorem, ipsum dolor."), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Lorem, ipsum."), /*#__PURE__*/React.createElement("li", null, "Lorem, ipsum."), /*#__PURE__*/React.createElement("li", null, "Lorem, ipsum.")));
var template2 = /*#__PURE__*/React.createElement("div", {
  id: "product-details"
}, /*#__PURE__*/React.createElement("h2", {
  id: "product-name"
}, "name: Samsung S9"), /*#__PURE__*/React.createElement("p", {
  id: "product-price"
}, "price: 3000 TL"), /*#__PURE__*/React.createElement("p", {
  id: "product-desc"
}, "desrcription: iyi bir telefon")); // ReactDOM

ReactDOM.render(template2, root);
