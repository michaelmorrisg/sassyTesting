import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <button>Push</button>
        <button className="blue">Don't Push</button>
        <button>Maybe Push</button>

        <div className="container">
          <div className="sidebar">Sidebar</div>
          <div className="main">Main</div>
        </div>
      </div>
    );
  }
}

export default App;
