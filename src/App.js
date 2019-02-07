import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './js/Landing';
import Project from './js/Project';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component= { Landing } />
            <Route path="/work" component= { Project } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
