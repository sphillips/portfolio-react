import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import About from './About';
import FullImage from './FullImage';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/image/:id" children={<FullImage />}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
