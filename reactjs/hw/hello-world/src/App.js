import React, { Component } from 'react';
import Project from './Components/Project';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        My app
        <Project/>
      </div>
    );
  }
}

export default App;
