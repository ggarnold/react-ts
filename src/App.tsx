import * as React from 'react';
import './App.css';
import EasyLink from './components/EasyLink'
import SessionLinks from './components/SessionLinks'
import { AuthService } from './services/AuthService'

import logo from './logo.svg';

class App extends React.Component {
  public render() {

    const userName = new AuthService("Gregory").getName();

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <SessionLinks />
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>
          <EasyLink name={userName} />
        </p>
      </div>
    );
  }
}

export default App;
