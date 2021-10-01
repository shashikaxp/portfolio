import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Landing } from './screens/Landing';
import { Experience } from './screens/Experience';
import { ProjectDetails } from './screens/ProjectDetails';
import { AnimationContainer } from './components/AnimationContainer';

export const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Landing>
            <Experience />
            <Route
              exact
              path="/projects/:id"
              children={({ match }) => {
                return (
                  <AnimationContainer
                    component={ProjectDetails}
                    match={match}
                    whenToRender={(match) =>
                      typeof match?.params?.id !== 'undefined'
                    }
                  />
                );
              }}
            ></Route>
          </Landing>
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
