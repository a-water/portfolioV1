import React, { Component } from 'react';

class LandingBlurb extends Component {
  render() {
    return(
      <div className="blurb">
        <p> { this.props.content } </p>
      </div>
    )
  }
}

export default LandingBlurb;