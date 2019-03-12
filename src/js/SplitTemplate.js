import React, { Component } from 'react';
import ProjectBio from './ProjectBio';
import LandingBlurb from './LandingBlurb';
import Fade from 'react-reveal/Fade';

class SplitTemplate extends Component {

  renderContent(contentType, content) {   
    switch(contentType) {
      case 'text':
        return <LandingBlurb content={ content }/>
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
        <Fade>
          <div className={`split left ${this.props.isLanding ? "landingLeft" : ""}`}>
            { this.renderContent(this.props.leftType, this.props.leftContent) }
          </div>
        </Fade>
        <Fade>
          <div className={`split right ${this.props.isLanding ? "landingRight" : ""}`}>
            { this.renderContent(this.props.rightType, this.props.rightContent) }
          </div>
        </Fade>
      </div>
    );
  }
}

export default SplitTemplate;