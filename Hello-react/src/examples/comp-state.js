class Car extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      brand: "Mazda",
      model: "Cx-3",
      color: "white",
      year: 2015,
    };
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor() {
    this.setState({
      color: "blue",
    });
  }

  render() {
    return (
      <div>
        <h1>
          {this.state.brand} {this.state.model}
        </h1>
        <p>selected color: {this.state.color} </p>
        <button onClick={this.changeColor}>Change Color</button>
      </div>
    );
  }
}

ReactDOM.render(<Car />, document.getElementById("root"));
