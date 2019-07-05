import React, { Component } from 'react';
import './App.css';
//components
import HomeContainer from '../Containers/HomeContainer/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomeContainer />
      </div>
    );
  }
}

export default App;
