import React, { Component } from 'react';
import { addBand } from '../actions';

export default class BandInput extends Component {
	state = { text: '' };

	handleChange = e => {
		this.setState({ text: e.target.value });
	};

	handleSubmit = e => {
		e.preventDefault();
		console.log(this.state.text);
		this.props.store.dispatch(addBand(this.state.text));
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input
					type="text"
					value={this.state.text}
					placeholder="Band Name"
					onChange={this.handleChange}
				/>
				<input type="submit" />
			</form>
		);
	}
}

// connect(null, mapDispatchToProps)(BandInput)
