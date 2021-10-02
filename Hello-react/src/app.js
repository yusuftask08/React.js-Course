// JSX - Javascript XML
var root = document.getElementById('root');

var template =  <div>
                    <h1 id="header">Hello World</h1>
                    <div>Lorem, ipsum dolor.</div>
                    <ul>
                        <li>Lorem, ipsum.</li>
                        <li>Lorem, ipsum.</li>
                        <li>Lorem, ipsum.</li>
                    </ul>
                </div>;

    var template2 = (<div id="product-details">
        <h2 id="product-name">name: Samsung S9</h2>
        <p id="product-price">price: 3000 TL</p>
        <p id="product-desc">desrcription: iyi bir telefon</p>
    </div>);

// ReactDOM
ReactDOM.render(template2, root);
