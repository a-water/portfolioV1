import React, { Component } from 'react';
import ProjectBio from './ProjectBio';

class SplitTemplate extends Component {

  renderContent(contentType, content) {   
    switch(contentType) {
      case 'text':
        return <p> { content } </p>;
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
        <div className="split left">
          { this.renderContent(this.props.leftType, this.props.leftContent) }
        </div>
        
        <div className="split right">
          { this.renderContent(this.props.rightType, this.props.rightContent) }
        </div>
      </div>
    );
  }
}

export default SplitTemplate;