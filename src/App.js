import React, { Fragment } from 'react';
import MainHeader from './components/MainHeader/MainHeader.js'; // Corrected import path
import Login from './components/Login/Login.js';

function App() {
  return (
    <div className="App">
      <Fragment>
        <MainHeader />
        <header className="App-header">
          
          <main>
            <Login />
          </main>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </Fragment>
    </div>
  );
}

export default App;