import React, { Component } from "react";

class Bands extends Component {
	mapBands = () => {
		const st = this.props.store.getState();
		console.log(st);
		return st.bands.map(band => <li>{band}</li>);
	};
	render() {
		return (
			<div>
				<ul>{this.mapBands()}</ul>
			</div>
		);
	}
}

export default Bands;
