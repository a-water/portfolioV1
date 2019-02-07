import React, { Component } from 'react';


class SplitTemplate extends Component {
  render() {
    console.log("props:", this.props);
    return (
      <div>
        <div className="SplitParent">
          <div className="split left"></div>
          <div className="split right"></div>
        </div>
      </div>
    );
  }
}

export default SplitTemplate;