// JSX - Javascript XML
var root = document.getElementById("root");

var template = (
  <div>
    <h1 id="header">Hello World</h1>
    <div>Lorem, ipsum dolor.</div>
    <ul>
      <li>Lorem, ipsum.</li>
      <li>Lorem, ipsum.</li>
      <li>Lorem, ipsum.</li>
    </ul>
  </div>
);

var name = "Samsung S10";
var price = 5000;

var product = {
  name: "Samsung S12",
  price: 7000,
  desc: "iyi bir telefon",
  types: ["red", "blue"],
};

function getDesc(desc) {
  if (desc) {
    return <p id="product-desc">description :{desc}</p>;
  }
}

var template2 = (
  <div id="product-details">
    <h2 id="product-name">name: {product.name ? product.name : "no name"}</h2>
    {/* <p id="product-price">price: {product.price== 0 ?'free':product.price}</p> */}
    {product.price && product.price > 0 && <p> price: {product.price} TL </p>}
    {getDesc(product.desc)}
    <p> {product.types.length > 0 ? "there are options" : "no options"} </p>
  </div>
);

// ReactDOM
ReactDOM.render(template2, root);
