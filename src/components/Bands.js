import React, { Component } from 'react';
import BandInput from './BandInput'

class Bands extends Component {

  bands = this.props.store.getState().bands.map((band, index) => {
    return <li>{band}</li>
  });

  render(){
    return (
      <div>
        <BandInput />
        <ul>
          {this.bands}
        </ul>
      </div>
    );
  }
};

export default Bands;
