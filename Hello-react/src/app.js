// JSX - Javascript XML
var root = document.getElementById("root");

var app = {
  title: "Todo APP",
  desc: "Todo uygulaması",
  items: ["item 1", "item 2"],
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

  var template = (
    <div>
      <h1 id="header"> {app.title} </h1> <div> {app.desc} </div>
      {
        <ul>
          {app.items.map((item,i) => {
            return <li key={i}> {item} </li>;
          })}
        </ul>
      }
      {/* <ul>
        <li>Lorem, ipsum.</li>
        <li> Lorem, ipsum. </li>
        <li> Lorem, ipsum. </li>
      </ul> */}
      <p>
        <button onClick={clearItems}>Clear Item</button>
      </p>
      <p> {app.items.length} </p>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="txtItem" />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );

  ReactDOM.render(template, root);
}

render();
