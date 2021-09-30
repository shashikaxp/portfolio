import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import { Home } from './screens/Home';
import { Experience } from './screens/Experience';
import { ProjectDetails } from './screens/ProjectDetails';

export const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Experience />
          <Route exact path="/projects/:id">
            <ProjectDetails />
          </Route>
        </Route>
      </Switch>
    </Router>
  );
};

{
  /* <Route path="/experience">
  <Experience />
</Route>; */
}
