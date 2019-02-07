import React, { Component } from 'react';
import SplitTemplate from './SplitTemplate';
import Nav from './Nav';

class Project extends Component {
  render() {
    return (
      <div>
        <Nav displayName = { true }/>
        <SplitTemplate 
          leftContent = "text"
          rightContent = "image"  
        />
      </div>
    );
  }

}

export default Project;