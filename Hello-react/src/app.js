class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.clearItems = this.clearItems.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.state = {
      items: ["item 1", "item 2", "item 3", "item 4"],
    };
  }

  componentDidMount() {
    console.log(`component oluşturuldu`);
    const json = localStorage.getItem("items");
    const items = JSON.parse(json);
    if (items) {
      this.setState({
        items: items,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("component de güncelleme oldu");
    if (prevState.items.length !== this.state.items.length) {
      const json = JSON.stringify(this.state.items);
      localStorage.setItem("items", json);
    }
  }
  componentWillUnmount() {
    console.log("component silindi");
  }
  deleteItem(item) {
    this.setState((prevState) => {
      const arr = prevState.items.filter((i) => {
        return item != i;
      });
      return {
        items: arr,
      };
    });
  }
  clearItems() {
    this.setState({
      items: [],
    });
  }
  addItem(item) {
    if (!item) {
      return "eklemek istediğiniz elemanı girin";
    } else if (this.state.items.indexOf(item) > -1) {
      return "bu eleman daha önce eklenmiştir";
    }

    this.setState((prevState) => {
      return {
        items: prevState.items.concat(item),
      };
    });
  }
  render() {
    const title = "Todo App";
    const desc = "Lorem, ipsum dolor.";
    return (
      <div>
        <Header title={title} desc={desc} />
        <Todo
          items={this.state.items}
          deleteItem={this.deleteItem}
          clearItems={this.clearItems}
        />
        <Action addItem={this.addItem} />
      </div>
    );
  }
}

// ES6
const Header = (props) => {
  return (
    <div>
      <h1> {props.title} </h1> <div> {props.desc} </div>
    </div>
  );
};

// ES5
// function Header(props) {
//   return (
//     <div>
//       <h1> {props.title} </h1>
//       <div>{props.desc}</div>
//     </div>
//   );
// }

const Todo = (props) => {
  return (
    <div>
      <ul>
        {props.items.map((item, index) => (
          <TodoItem deleteItem={props.deleteItem} key={index} item={item} />
        ))}
      </ul>
      <p>
        <button onClick={props.clearItems}> Clear Items </button>{" "}
      </p>
    </div>
  );
};

const TodoItem = (props) => {
  return (
    <li>
      {props.item}
      <button
        onClick={() => {
          props.deleteItem;
        }}
      >
        X
      </button>
    </li>
  );
};

class Action extends React.Component {
  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.state = {
      error: "",
    };
  }
  onFormSubmit(e) {
    e.preventDefault();
    const item = e.target.elements.txtItem.value.trim();
    const error = this.props.addItem(item);

    this.setState({
      error: error,
    });
    e.target.elements.txtItem.value = "";
  }
  render() {
    return (
      <div>
        {" "}
        {this.state.error && <p> {this.state.error} </p>}{" "}
        <form onSubmit={this.onFormSubmit}>
          <input type="text" name="txtItem" />
          <button type="submit"> Add Item </button>{" "}
        </form>{" "}
      </div>
    );
  }
}

ReactDOM.render(<TodoApp />, document.getElementById("root"));
