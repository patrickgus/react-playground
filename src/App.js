import React, { Component } from 'react';
import './App.css';
// import Counter from './state/Counter';
// import HelloWorld from './state-drills/HelloWorld';
import Bomb from './state-drills/Bomb';

class App extends Component {
  // static defaultProps = {
  //   step: 1
  // }
  render() {
    return (
      <div className="App">
        {/* <Counter count={123} step/> */}
        {/* <HelloWorld /> */}
        <Bomb />
      </div>
    );
  }
}

export default App;
