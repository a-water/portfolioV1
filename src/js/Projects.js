import React, { Component } from 'react';
import SplitTemplate from './SplitTemplate';
import Nav from './Nav';
import ProjectData from './data/ProjectInfo.json';

class Projects extends Component {

  constructor(props) {
    super(props);
    this.state = {
      projects: ProjectData.projects
    }
  }

  createProjectItems = () => {
    let imageFirst = true;
    return(
      this.state.projects.map((project) => {
        imageFirst = !imageFirst;        
        let splitTemplateData = { 
              leftType: imageFirst ? "image" : "bio", 
              leftContent: project,
              rightType: imageFirst ? "bio" : "image",
              rightContent: project
        };
        return <SplitTemplate { ...splitTemplateData } key={ project.name }/>
      })
    );
  }

  render() {
    return (
      <div>
        <Nav displayName = { true }/>
        { this.createProjectItems() }
      </div>
    );
  }

}

export default Projects;