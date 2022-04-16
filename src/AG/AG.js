import React, { Component } from 'react';
import './AG.css';
class AG extends Component {
  postSubmission() {
    console.log("submitted!");
    fetch('/api/upload', {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      body: JSON.stringify({
        field1: 'value1',
        field2: 'value2'
      })
    })
      .then((response) => {
        console.log(response)
      })
      .catch((err) => {
        console.error(err);
      });
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