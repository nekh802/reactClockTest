import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Clock from './components/Clock';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <Welcome name="React"/>
          <Clock/>
        </div>
      </div>
    );
  }
}

export default App;