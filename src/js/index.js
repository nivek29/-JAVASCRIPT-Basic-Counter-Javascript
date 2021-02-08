//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Counter } from "./component/counter.js";

//render your react application
let contador = 0;
var _four;
var _three;
var _two;
var _one;
setInterval(function() {
	_four = Math.floor(contador / 1000);
	_three = Math.floor(contador / 100);
	_two = Math.floor(contador / 10);
	_one = Math.floor(contador / 1);
	//console.log(_four, _three, _two, _one);
	ReactDOM.render(
		<Counter
			CounterOne={_one}
			CounterTwo={_two}
			CounterThree={_three}
			CounterFour={_four}
		/>,
		document.querySelector("#app")
	);
	contador++;
}, 1000);
