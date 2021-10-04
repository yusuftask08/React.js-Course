var number = 0;
var btnOneClassName = "btnRed";
var btnOneMınusClassNAme = "btnBlue";

function addOne() {
  number++;
  renderApp();
  console.log("ad one");
}
var minusOne = () => {
  number--;
  renderApp();
  console.log("minus one");
};

function renderApp() {
  var template2 = (
    <div>
      <h1> Number: {number} </h1>{" "}
      <button className={btnOneClassName} onClick={addOne}>
        +1{" "}
      </button>{" "}
      <button className={btnOneMınusClassNAme} onClick={minusOne}>
        -1{" "}
      </button>{" "}
    </div>
  );
  ReactDOM.render(template2, root);
}

function tick() {
  var element = (
    <div>
      <h2> time is: {new Date().toLocaleDateString()} </h2>{" "}
    </div>
  );

}
setInterval(() => {
  tick();
}, 1000);
// renderApp();
