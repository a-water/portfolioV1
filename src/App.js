import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './js/Landing';
import Projects from './js/Projects';
import Contact from './js/Contact';

class App extends Component {
  render() {
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
