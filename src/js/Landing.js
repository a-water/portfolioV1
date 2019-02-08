import React, { Component } from 'react';
import Nav from './Nav';
import SplitTemplate from './SplitTemplate';
import landingPageData from './data/LandingPageData.json';

class Landing extends Component {
  render() {
    let splitTemplateData = { 
      leftType: "text", 
      leftContent: landingPageData["introText"],
      rightType: "text",
      rightContent: landingPageData["aboutText"]
    };
    
    return (
      <div>
        <Nav />
        <SplitTemplate { ...splitTemplateData }/>
      </div>
    )
  };
}

export default Landing;