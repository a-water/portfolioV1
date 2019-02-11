import React, { Component } from 'react';
import Nav from './Nav';

class Contact extends Component {
  render() {
    return(
      <div>
        <Nav displayName = { true }/>
        <div className="contact">
          <ul>
            <li><a href="mailto:aaronwaterhouse@gmail.com?Subject=Hi%20Aaron" target="_top">Send Mail</a></li>
            <li><a href="https://github.com/a-water" rel="noopener noreferrer" target="_blank">Github</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Contact;