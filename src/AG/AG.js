import React, { Component } from 'react';
import './AG.css';
class AG extends Component {
  postSubmission() {
    console.log("submitted!");
  }

  render = () => {
    return(
        <div>
          <h1> AG LETS GOOOO </h1>
          <button onClick={this.postSubmission}> Submit </button>
        </div>
    );
  }
}

export default AG;