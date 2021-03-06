import React, { Component } from 'react';
import Nav from './Nav';
import SplitTemplate from './SplitTemplate';
import landingPageData from './data/LandingPageData.json';
import Footer from './Footer';

class Landing extends Component {
  render() {
    let splitTemplateData = { 
      leftType: "text", 
      leftContent: landingPageData["introText"],
      rightType: "text",
      rightContent: landingPageData["aboutText"],
      isLanding: true
    };
    
    return (
      <div>
        <Nav />
        <SplitTemplate { ...splitTemplateData } />
        <Footer />
      </div>
    )
  };
}

export default Landing;