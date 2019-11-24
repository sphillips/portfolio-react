import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';

function App() {
  return (
    <div className="Home">
      <Header />
    </div>
  );
}

export default App;
