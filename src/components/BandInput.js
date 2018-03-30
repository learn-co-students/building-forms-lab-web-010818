import React, { Component } from 'react';

class BandInput extends Component {
  state = {
    text: ''
  }

  handleInput = (e) => {
    this.setState({text: e.target.value})
  }

  handleSubmit = (e) => {
    console.log("Band Input props.store:", this.props.store)
    e.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_BAND',
      band: this.state.text,
    });
    this.setState({text: ''});
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label>Add Band</label>
          <input type='text' onChange={this.handleInput} value={this.state.text}></input>
          <input type='submit'></input>
        </form>
      </div>
    );
  }
};

export default BandInput;
