import React from 'react'
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './view/home/Home'
import PageNav from './view/pageNav/PageNav'
import NotMatch from './view/404/NotMatch'
import CodeGame from './view/codeGame/CodeGame'

const App = function () {
  return (
      <Router>
        <Switch>
          <Route  path="/" exact={true}>
            <Home />
          </Route>
          <Route  path="/pageNav">
            <PageNav />
          </Route>
          <Route  path="/codeGame">
            <CodeGame />
          </Route>

          <Route  path="/*">
            <NotMatch />
          </Route>
        </Switch>
      </Router>
  );
}

export default App


