import React, { Component } from 'react';
import SplitTemplate from './SplitTemplate';
import Nav from './Nav';
import ProjectData from './data/ProjectInfo.json';

class Projects extends Component {

  constructor(props) {
    super(props);
    this.state = {
      projects: ProjectData.projects,
      width: 0
    }
    this.updateWindowHeight = this.updateWindowHeight.bind(this);
  }

  componentDidMount() {
    this.updateWindowHeight();
    window.addEventListener('resize', this.updateWindowHeight);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowHeight);
  }

  updateWindowHeight() {
    this.setState({ width: window.innerWidth })
  }

  createProjectItems = () => {
    let imageFirst = false;
    return(
      this.state.projects.map((project) => {
        let splitTemplateData = { 
              leftType: imageFirst ? "image" : "bio", 
              leftContent: project,
              rightType: imageFirst ? "bio" : "image",
              rightContent: project
        };
        if(this.state.width > 1200 ) {
          imageFirst = !imageFirst;
        }
        return <SplitTemplate { ...splitTemplateData } key={ project.name }/>
      })
    );
  }

  render() {
    console.log('widnow width:', this.state.width);
    
    return (
      <div>
        <Nav displayName = { true }/>
        { this.createProjectItems() }
      </div>
    );
  }

}

export default Projects;