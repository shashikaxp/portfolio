import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Home } from './screens/Home';
import { Experience } from './screens/Experience';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/company">
          <Experience />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
