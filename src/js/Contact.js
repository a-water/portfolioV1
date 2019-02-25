import React, { Component } from 'react';
import Nav from './Nav';
import Footer from './Footer';

class Contact extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      message: "",
      displayErrors: false
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log('state:', this.state);
  }

  handleSubmit(event) {
    event.preventDefault();
    if(!event.target.checkValidity()) {
      this.setState ({ displayErrors: true });
      return;
    }

    let formData = event.target;
    fetch('https://formspree.io/aaronwaterhouse@gmail.com', {
      method: 'POST',
      body: formData
    })
    
    this.setState({
      name: "",
      email: "",
      message: "",
      displayErrors: false
    })
  }

  render() {
    return(
      <div>
        <Nav displayName = { true }/>
        <div className="contact">
          <form onSubmit={ this.handleSubmit } noValidate className={this.state.displayErrors ? "displayErrors" : ""}>
            <label>Name</label>
            <input type="text" name="name"placeholder="Jane Doe" value={ this.state.name } onChange={ this.handleInputChange } required />
            <br />

            <label>Email</label>
            <input type="email" name="email" placeholder="janedoe@xyz.com" value={ this.state.email } onChange={ this.handleInputChange } required />
            <br />

            <label>Message</label> 
            <textarea type="text" name="message" placeholder="Hi Aaron..." value={ this.state.message } onChange={ this.handleInputChange } required></textarea>
            <br />

            <input type="submit" value="Submit" />
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Contact;