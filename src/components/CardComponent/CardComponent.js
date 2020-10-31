import React, { Component } from "react";
import "./CardComponent.css";

class CardComponent extends Component {
	render() {
		return (
			<div className="card bg-light mb-3">
				<div className="card-header">{this.props.header}</div>
				<div className="card-body">
					<p className="card-text">{this.props.cases}</p>
				</div>
			</div>
		);
	}
}

export default CardComponent;
