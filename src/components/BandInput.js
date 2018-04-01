import React, { Component } from 'react';

class BandInput extends Component {

  state = {
    text: ""
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.store.dispatch({
      type: "ADD_BAND",
      band: this.state.text
    })
    this.setState({
      text: ""
    })
  }


  render() {
    return (
      <div>
        <form
          onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.value}/>
          <input type="submit" />
        </form>
        {this.state.value}
      </div>
    );
  }
};

export default BandInput;
