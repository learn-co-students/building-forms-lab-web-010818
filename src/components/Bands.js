import React, { Component } from 'react';

class Bands extends Component {

  render(){
    const allBands = this.props.store.getState().bands.map((band, index) => {
      return <li key={index}>{band}</li>
    })
    return (
      <div>
        <ul>
        {allBands}
      </ul>
      </div>
    );
  }
};

export default Bands;
