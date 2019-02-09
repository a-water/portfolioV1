import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <div className="mainNav">
        <div className="innerNav">
          <Link id="name" to="/">{ this.props.displayName ? "Aaron Waterhouse" : null }</Link>
          <div id="navLinks">
            <Link to="/work" className="navLink">Work</Link>
            <Link to="/resume" className="navLink">Resume</Link>
            <Link to="/contact" className="navLink">Contact</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Nav;