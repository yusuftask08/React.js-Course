"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var TodoApp = /*#__PURE__*/function (_React$Component) {
  _inherits(TodoApp, _React$Component);

  var _super = _createSuper(TodoApp);

  function TodoApp(props) {
    var _this;

    _classCallCheck(this, TodoApp);

    _this = _super.call(this, props);
    _this.clearItems = _this.clearItems.bind(_assertThisInitialized(_this));
    _this.addItem = _this.addItem.bind(_assertThisInitialized(_this));
    _this.deleteItem = _this.deleteItem.bind(_assertThisInitialized(_this));
    _this.state = {
      items: ["item 1", "item 2", "item 3", "item 4"]
    };
    return _this;
  }

  _createClass(TodoApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log("component olu\u015Fturuldu");
      var json = localStorage.getItem("items");
      var items = JSON.parse(json);

      if (items) {
        this.setState({
          items: items
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      console.log("component de g??ncelleme oldu");

      if (prevState.items.length !== this.state.items.length) {
        var json = JSON.stringify(this.state.items);
        localStorage.setItem("items", json);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      console.log("component silindi");
    }
  }, {
    key: "deleteItem",
    value: function deleteItem(item) {
      this.setState(function (prevState) {
        var arr = prevState.items.filter(function (i) {
          return item != i;
        });
        return {
          items: arr
        };
      });
    }
  }, {
    key: "clearItems",
    value: function clearItems() {
      this.setState({
        items: []
      });
    }
  }, {
    key: "addItem",
    value: function addItem(item) {
      if (!item) {
        return "eklemek istedi??iniz eleman?? girin";
      } else if (this.state.items.indexOf(item) > -1) {
        return "bu eleman daha ??nce eklenmi??tir";
      }

      this.setState(function (prevState) {
        return {
          items: prevState.items.concat(item)
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var title = "Todo App";
      var desc = "Lorem, ipsum dolor.";
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, {
        title: title,
        desc: desc
      }), /*#__PURE__*/React.createElement(Todo, {
        items: this.state.items,
        deleteItem: this.deleteItem,
        clearItems: this.clearItems
      }), /*#__PURE__*/React.createElement(Action, {
        addItem: this.addItem
      }));
    }
  }]);

  return TodoApp;
}(React.Component); // ES6


var Header = function Header(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, " ", props.title, " "), " ", /*#__PURE__*/React.createElement("div", null, " ", props.desc, " "));
}; // ES5
// function Header(props) {
//   return (
//     <div>
//       <h1> {props.title} </h1>
//       <div>{props.desc}</div>
//     </div>
//   );
// }


var Todo = function Todo(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("ul", null, props.items.map(function (item, index) {
    return /*#__PURE__*/React.createElement(TodoItem, {
      deleteItem: props.deleteItem,
      key: index,
      item: item
    });
  })), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("button", {
    onClick: props.clearItems
  }, " Clear Items "), " "));
};

var TodoItem = function TodoItem(props) {
  return /*#__PURE__*/React.createElement("li", null, props.item, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      props.deleteItem;
    }
  }, "X"));
};

var Action = /*#__PURE__*/function (_React$Component2) {
  _inherits(Action, _React$Component2);

  var _super2 = _createSuper(Action);

  function Action(props) {
    var _this2;

    _classCallCheck(this, Action);

    _this2 = _super2.call(this, props);
    _this2.onFormSubmit = _this2.onFormSubmit.bind(_assertThisInitialized(_this2));
    _this2.state = {
      error: ""
    };
    return _this2;
  }

  _createClass(Action, [{
    key: "onFormSubmit",
    value: function onFormSubmit(e) {
      e.preventDefault();
      var item = e.target.elements.txtItem.value.trim();
      var error = this.props.addItem(item);
      this.setState({
        error: error
      });
      e.target.elements.txtItem.value = "";
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, " ", this.state.error && /*#__PURE__*/React.createElement("p", null, " ", this.state.error, " "), " ", /*#__PURE__*/React.createElement("form", {
        onSubmit: this.onFormSubmit
      }, /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "txtItem"
      }), /*#__PURE__*/React.createElement("button", {
        type: "submit"
      }, " Add Item "), " "), " ");
    }
  }]);

  return Action;
}(React.Component);

ReactDOM.render( /*#__PURE__*/React.createElement(TodoApp, null), document.getElementById("root"));
