import React from 'react';
import './App.scss';
import IndexPage from './components/IndexPage';
import TradingPage from './components/TradingPage';
import ProjectsPage from './components/ProjectsPage';
import KtAppBar from './KtAppBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PaidIcon from '@mui/icons-material/Paid';
import CodeIcon from '@mui/icons-material/Code';

export default function App() {
  return (
    <Router>
      <main className="kurtistaylordev">
        {/* <KtAppBar></KtAppBar> */}
        <Switch>
          <Route path="/trading">
            <TradingPage />
          </Route>
          <Route path="/projects">
            <ProjectsPage />
          </Route>
          <Route path="/">
            <IndexPage />
          </Route>
        </Switch >
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
          <BottomNavigation
            showLabels
            value={0}
            onChange={(event, newValue) => {
              switch (newValue) {
                case 0:
                  window.location.href = "/"
                  break;
                case 1:
                  window.location.href = "/trading"
                  break;
                case 2:
                  window.location.href = "/projects"
              }
            }}
          >
            <BottomNavigationAction label="Home" icon={<AccountCircleIcon />} />
            <BottomNavigationAction label="Trading" icon={<PaidIcon />} />
            <BottomNavigationAction label="Projects" icon={<CodeIcon />} />
          </BottomNavigation>
        </Paper>
      </main >
    </Router >
  );
}
