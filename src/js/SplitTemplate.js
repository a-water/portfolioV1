import React, { Component } from 'react';
import ProjectBio from './ProjectBio';
import LandingBlurb from './LandingBlurb';

class SplitTemplate extends Component {

  renderContent(contentType, content) {   
    switch(contentType) {
      case 'text':
        return <LandingBlurb content={ content }/>//<p className="splitText"> { content } </p>;
      case 'bio':
        return <ProjectBio { ...content }/>
      case 'image':
        return <img className="splitImg" alt="Project" src={ require(`../assets/${content.asset}`) }/>
      default:
        return null;
    }
  }

  render() {
    return (
      <div className="SplitParent">
        <div className={`split left ${this.props.isLanding ? "landingLeft" : ""}`}>
          { this.renderContent(this.props.leftType, this.props.leftContent) }
        </div>
        
        <div className={`split right ${this.props.isLanding ? "landingRight" : ""}`}>
          { this.renderContent(this.props.rightType, this.props.rightContent) }
        </div>
      </div>
    );
  }
}

export default SplitTemplate;