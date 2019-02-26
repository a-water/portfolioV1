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
      displayErrors: false,
      modalHidden: true
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    // Validate the form
    if(!event.target.checkValidity()) {
      this.setState ({ displayErrors: true });
      return;
    }

    // Set state for the modal so that it'll show up
    this.setState({
      modalHidden: false
    })

    // Make POST request to send form data via email
    let formData = new FormData(event.target);
    fetch('https://script.google.com/macros/s/AKfycbw3iEa-dEQ3sTrBP8xo0FySs8t_fJ5a1pL200r3/exec', {
      method: 'POST',
      body: formData
    })
      .then(response => {
        this.setState({
          name: "",
          email: "",
          message: "",
          displayErrors: false,
          modalHidden: !this.state.modalHidden
        })
      })
  }

  render() {
    return(
      <div>
        <Nav displayName = { true }/>
        <div className="contact">
          <form onSubmit={ this.handleSubmit } noValidate className={`gform ${this.state.displayErrors ? "displayErrors" : ""}`}>
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
          <div className={`submit-modal ${this.state.modalHidden ? "submit-modal-hidden" : ""}`}>
            <p>Submitted! </p>
            <p>I'll be in touch soon.</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Contact;