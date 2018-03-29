import React, { Component } from 'react';

class BandInput extends Component {
  state = {
    text:''
  }

  handleChange = e => {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.store.dispatch({
      type:'ADD_BAND',
      band: this.state.text
    })
    this.setState({
      text:''
    })
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Band</label>
          <input onChange={this.handleChange} type='text' value={this.state.text} />
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
};

export default BandInput;
