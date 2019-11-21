import React, { Component } from 'react';
import './App.css';
import Counter from './state/Counter';

class App extends Component {
  static defaultProps = {
    step: 1
  }
  render() {
    return (
      <div className="App">
        <Counter count={123} step/>
      </div>
    );
  }
}

export default App;
