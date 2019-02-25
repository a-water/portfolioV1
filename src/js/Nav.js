import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import resumePdf from '../assets/Aaron-Waterhouse-Feb.pdf';

class Nav extends Component {
  // constructor(props) {
  //   super(props);
  // }

  addCurrentPageClass(path) {
    let currentPath = this.props;
    console.log(currentPath);
    
  }

  render() {
    return (
      <div className="mainNav">
        <div className="innerNav">
          <Link id="name" to="/">{ this.props.displayName ? "Aaron Waterhouse" : null }</Link>
          <div id="navLinks">
            <Link to="/work" className="navLink">Work</Link>
            <a href={ resumePdf } rel="noopener noreferrer" target="_blank" className="navLink">CV</a>
            <Link to="/contact" className="navLink">Contact</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Nav;