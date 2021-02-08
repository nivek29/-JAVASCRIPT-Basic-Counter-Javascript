import React from "react";
import PropTypes from "prop-types";
//include images into your bundle

//create your first component
export function Counter(props) {
	console.log(props.CounterOne);
	return (
		<div className="d-flex justify-content-center">
			<i className="col-1 far fa-clock fa-4x text-center"></i>
			<div className="cuatro col-2">
				<h1 className="d-flex justify-content-center">
					{props.CounterFour % 10}
				</h1>
			</div>
			<div className="tres col-2">
				<h1 className="d-flex justify-content-center">
					{props.CounterThree % 10}
				</h1>
			</div>
			<div className="dos col-2">
				<h1 className="d-flex justify-content-center">
					{props.CounterTwo % 10}
				</h1>
			</div>
			<div className="uno col-2">
				<h1 className="d-flex justify-content-center">
					{props.CounterOne % 10}
				</h1>
			</div>
		</div>
	);
}

Counter.propTypes = {
	CounterFour: PropTypes.number,
	CounterThree: PropTypes.number,
	CounterTwo: PropTypes.number,
	CounterOne: PropTypes.number
};
