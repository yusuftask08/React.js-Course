class TodoApp extends React.Component {
  render() {
    const title = "Todo App";
    const desc = "Lorem, ipsum dolor.";
    const items = ["item 1", "item 2", "item 3"];
    return (
      <div>
        <Header title={title} desc={desc} />
        <Todo items={items} />
        <Action />
      </div>
    );
  }
}

// const Header = function (props) {
//   console.log(props);
//   return (
//     <div>
//       <h1>{props.title}</h1>
//       <div> {props.desc} </div>
//     </div>
//   );
// };
console.log(React.Component);
class Header extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1> {this.props.title} </h1>
        <div>{this.props.desc}</div>
      </div>
    );
  }
}

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.clearItems = this.clearItems.bind(this);
  }

  clearItems() {
    console.log(this.props.items);
    console.log("clear items");
  }
  render() {
    return (
      <div>
        <ul>
          {this.props.items.map((item, index) => (
            <TodoItem key={index} item={item} />
          ))}
        </ul>
        <p>
          <button onClick={this.clearItems}>Clear Items</button>
        </p>
      </div>
    );
  }
}

class TodoItem extends React.Component {
  render() {
    return <li> {this.props.item} </li>;
  }
}

class Action extends React.Component {
  onFormSubmit(e) {
    e.preventDefault();

    const item = e.target.elements.txtItem.value.trim();
    if (item) {
      console.log("item :>> ", item);
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" name="txtItem" />
          <button type="submit">Add Item</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<TodoApp />, document.getElementById("root"));
