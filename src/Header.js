import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    <div className="Header">
      <header className="App-header">

      <ul className="Nav-list">
        <li className="Header-name">
          Sean Phillips
        </li>
        <li>
          <Link to="/" className="App-link">Photography</Link>
        </li>
        <li>
          <Link to="/about" className="App-link">About</Link>
        </li>
      </ul>
      </header>
    </div>
  );
}

export default Header;
