import React, { Component } from 'react';

class ProjectBio extends Component {
  render() {
    console.log("BIO props:", this.props);    
    return(
      <div className="BioBody">
        <p id="title">{ this.props.name }</p>
        <p id="description">{ this.props.description }</p>
        <div>
          <p>Technologies used:</p>
          <p id="technologies">{ this.props.technologies }</p>
        </div>

      </div>
    );
  }
}

export default ProjectBio;