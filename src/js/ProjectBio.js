import React, { Component } from 'react';

class ProjectBio extends Component {

  renderProjectLink(projectUrl) {
    if(projectUrl) {
      return (
        <a href={ this.props.website } rel="noopener noreferrer" target="_blank">
          <div className="websiteButton externalLink">
            Project Website
          </div>
        </a>
      )
    }
    return null;
  }

  renderGithubLink(githubUrl) {
    if(githubUrl) {
      return(
        <a href={ this.props.github } rel="noopener noreferrer" target="_blank">
          <div className="websiteButton githubLink">
            Github
          </div>
        </a>
      )
    }
    return null;
  }

  render() {
    return(
      <div className="biobody">
        <p className="title">{ this.props.name }</p>
        <p className="description">{ this.props.description }</p>
        <div>
          <p className="technologiesHeader">Technologies used:</p>
          <ul className="technologiesList">
            {
              this.props.technologies.map((technology) => {
                return <li key={technology}> { technology } </li>
              })
            }
          </ul>
        </div>

        <div className="projectLinks">
          { this.renderProjectLink(this.props.website) }
          { this.renderGithubLink(this.props.github) }
        </div>
      </div>
    );
  }
}

export default ProjectBio;