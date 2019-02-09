import React, { Component } from 'react';

class ProjectBio extends Component {
  render() {
    console.log("BIO props:", this.props);    
    return(
      <div className="biobody">
        <p className="title">{ this.props.name }</p>
        <p className="description">{ this.props.description }</p>
        <div>
          <p className="technologiesHeader">Technologies used:</p>
          <p className="technologies">{ this.props.technologies }</p>
        </div>

        <div className="projectLinks">
          <a href={ this.props.website } rel="noopener noreferrer" target="_blank">
            <div className="websiteButton externalLink">
              Project Website
            </div>
          </a>
          <a href={ this.props.github } rel="noopener noreferrer" target="_blank">
            <div className="websiteButton githubLink">
              Github
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default ProjectBio;