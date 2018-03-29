import React, { Component } from 'react';

class BandInput extends Component {
  state = {
    text: ""
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    },()=> console.log(this.state))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_BAND',
      band: this.state.text
    })
    this.setState({
      text: ""
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="text" value={this.state.text} placeholder="Band Name..." onChange={this.handleChange}></input>
        <input type="submit"></input>
      </form>
    );
  }
};

export default BandInput;
