"use strict";

// JSX - Javascript XML
var root = document.getElementById("root");
var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
  id: "header"
}, "Hello World"), /*#__PURE__*/React.createElement("div", null, "Lorem, ipsum dolor."), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Lorem, ipsum."), /*#__PURE__*/React.createElement("li", null, "Lorem, ipsum."), /*#__PURE__*/React.createElement("li", null, "Lorem, ipsum.")));
var name = "Samsung S10";
var price = 5000;
var product = {
  name: "Samsung S12",
  price: 7000,
  desc: "iyi bir telefon",
  types: ["red", "blue"]
};

function getDesc(desc) {
  if (desc) {
    return /*#__PURE__*/React.createElement("p", {
      id: "product-desc"
    }, "description :", desc);
  }
}

var template2 = /*#__PURE__*/React.createElement("div", {
  id: "product-details"
}, /*#__PURE__*/React.createElement("h2", {
  id: "product-name"
}, "name: ", product.name ? product.name : "no name"), product.price && product.price > 0 && /*#__PURE__*/React.createElement("p", null, " price: ", product.price, " TL "), getDesc(product.desc), /*#__PURE__*/React.createElement("p", null, " ", product.types.length > 0 ? "there are options" : "no options", " ")); // ReactDOM

ReactDOM.render(template2, root);
