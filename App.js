import React from 'react';
import logo from './logo.svg';
// import Search from './Search';
import News from './News.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Rose has basic knowledge about React
        </a>
      </header>
      {/* <Search /> */}
      <News />
    </div>
  );
}

export default App;
