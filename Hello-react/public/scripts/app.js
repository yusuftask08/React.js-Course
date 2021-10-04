"use strict";

// JSX - Javascript XML
var root = document.getElementById("root");
var app = {
  title: "Todo APP",
  desc: "Todo uygulaması",
  items: ["item 1", "item 2"]
};

function onFormSubmit(event) {
  event.preventDefault();
  var item = event.target.elements.txtItem.value;

  if (item) {
    app.items.push(item);
    event.target.elements.txtItem.value = "";
    render();
  }

  console.log("item :>> ", item);
  console.log("form submit", event);
}

function clearItems() {
  app.items = [];
  render();
}

function render() {
  var numbers = [1, 2, 3, 4, 5];
  var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    id: "header"
  }, " ", app.title, " "), " ", /*#__PURE__*/React.createElement("div", null, " ", app.desc, " "), /*#__PURE__*/React.createElement("ul", null, app.items.map(function (item, i) {
    return /*#__PURE__*/React.createElement("li", {
      key: i
    }, " ", item, " ");
  })), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("button", {
    onClick: clearItems
  }, "Clear Item")), /*#__PURE__*/React.createElement("p", null, " ", app.items.length, " "), /*#__PURE__*/React.createElement("form", {
    onSubmit: onFormSubmit
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "txtItem"
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Add Item")));
  ReactDOM.render(template, root);
}

render();
