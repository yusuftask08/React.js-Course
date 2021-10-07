class TodoApp extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Todo />
        <Action />
      </div>
    );
  }
}
class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Todo App</h1>
        <div>Lorem, ipsum dolor.</div>
      </div>
    );
  }
}

class Todo extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <TodoItem />
        </ul>
      </div>
    );
  }
}

class TodoItem extends React.Component {
  render() {
    return <li>Todo item</li>;
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <p>
          <button>Clear Items</button>
        </p>
        <form>
          <input type="text" />
          <button type="submit">Add Item</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<TodoApp />, document.getElementById("root"));
