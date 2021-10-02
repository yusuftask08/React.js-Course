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

var number = 0;
var btnOneClassName = "btnRed";
var btnOneMınusClassNAme = "btnBlue";
function addOne() {
  console.log("ad one");
}
var minusOne = () => {
  console.log("minus one");
};

var template2 = (
  <div>
    <h1> Number : {number} </h1>
    <button className={btnOneClassName} onClick={addOne}>
      +1{" "}
    </button>
    <button
      className={btnOneMınusClassNAme}
      onClick={() => {
        console.log("minus one");
      }}
    >
      -1{" "}
    </button>
  </div>
);

ReactDOM.render(template2, root);
