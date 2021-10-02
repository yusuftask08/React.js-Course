"use strict";

// JSX - Javascript XML
var root = document.getElementById("root");
var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
  id: "header"
}, "Hello World"), /*#__PURE__*/React.createElement("div", null, "Lorem, ipsum dolor."), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Lorem, ipsum."), /*#__PURE__*/React.createElement("li", null, "Lorem, ipsum."), /*#__PURE__*/React.createElement("li", null, "Lorem, ipsum.")));
var number = 0;
var btnOneClassName = "btnRed";
var btnOneMınusClassNAme = "btnBlue";

function addOne() {
  console.log("ad one");
}

var minusOne = function minusOne() {
  console.log("minus one");
};

var template2 = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, " Number : ", number, " "), /*#__PURE__*/React.createElement("button", {
  className: btnOneClassName,
  onClick: addOne
}, "+1", " "), /*#__PURE__*/React.createElement("button", {
  className: btnOneMınusClassNAme,
  onClick: function onClick() {
    console.log("minus one");
  }
}, "-1", " "));
ReactDOM.render(template2, root);
