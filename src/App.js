import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './js/Landing';
import Projects from './js/Projects';
import Contact from './js/Contact';
import ReactGA from 'react-ga';

class App extends Component {

  initGA() {
    ReactGA.initialize('UA-135211219-1');
    ReactGA.pageview('/');
  }

  render() {
    this.initGA();

    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component= { Landing } />
            <Route path="/work" component= { Projects } />
            <Route path="/contact" component= { Contact } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
