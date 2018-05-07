import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="torch-container">
          <div className="flame-container">
            <div className="flame"></div>
          </div>
          <div className="handle-container">
            <div className="handle"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
