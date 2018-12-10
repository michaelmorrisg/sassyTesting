import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <button>Push</button>
        <button className="pink">Don't Push</button>
        <button>Maybe Push</button>
      </div>
    );
  }
}

export default App;
