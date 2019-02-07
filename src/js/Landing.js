import React, { Component } from 'react';
import Nav from './Nav';
import SplitTemplate from './SplitTemplate';

class Landing extends Component {
  render() {
    return (
      <div>
        <Nav />
        <SplitTemplate 
          leftContent = "text"
          rightContent = "text" 
        />
      </div>
    )
  };
}

export default Landing;