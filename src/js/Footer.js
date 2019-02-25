import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render () {
    return (
      <div className="footer">
        <p>© Aaron Waterhouse {new Date().getFullYear()}</p>
        <div className="footer-links">
          <a href="https://github.com/a-water" rel="noopener noreferrer" target="_blank">Github</a>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    )
  }
}

export default Footer;