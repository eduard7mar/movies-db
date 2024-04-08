import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          <li>
            <Link to="/">Home</Link> 
          </li>
          <li>
            <Link to="/movies">Movies</Link> 
          </li>
          <li>
            <Link to="/about">About</Link> 
          </li>
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
