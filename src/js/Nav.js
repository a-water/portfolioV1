import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <div className="mainNav">
        <div className="innerNav">
          <span id="name"></span>
          <div id="navLinks">
            <Link to="/about" className="navLink">About</Link>
            <Link to="/work" className="navLink">Work</Link>
            <Link to="/resume" className="navLink">Resume</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Nav;