import React from 'react';
import './App.scss';
import KtAppBar from './KtAppBar';
import IndexPage from './components/IndexPage';
import AboutPage from './components/AboutPage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <main className="kurtistaylordev">
        {/* <KtAppBar></KtAppBar> */}
          <Switch>
            <Route path="/trading">
              {/* <trading /> */}
            </Route>
            <Route path="/projects">
              {/* <trading /> */}
            </Route>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/">
              <IndexPage />
            </Route>
          </Switch >
      </main >
    </Router >
  );
}
