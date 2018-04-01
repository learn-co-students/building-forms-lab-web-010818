import React, { Component } from 'react';

class Bands extends Component {
	render() {
		let state = this.props.store.getState();
		let bands = state.bands.map((b, i) => <li key={i}>{b}</li>);
		return <ul>{bands}</ul>;
	}
}

export default Bands;
