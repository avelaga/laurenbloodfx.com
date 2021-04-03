import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Home.js';
import Contact from './pages/Contact.js';
import Project from './pages/Project.js';
import './App.css';

const ErrorPage = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1> 404: Page Not Found</h1>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path='/' exact component={Home} />
        <Route exact path='/contact' exact component={Contact} />
        <Route exact path='/projects/:id' exact component={Project} />
        <Route component={ErrorPage} />
      </Switch>
    </Router>
  );
}

export default App;
