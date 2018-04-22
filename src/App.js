import React, { Component } from 'react';
import logo from './logo.svg';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import InputForm from "./components/input-form"

import SimpleMap from './components/SimpleMap'


class App extends Component {
  state = {
    origin: '',
    destination: 'Arlingon, tX'
  }

  render() {
    const { origin, destination } = this.state;

    return (
      <MuiThemeProvider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <InputForm />
          <SimpleMap
            ref={map => { this.map = map; }}
          />
          <input
            placeholder="start address here"
            onChange={e => this.setState({ origin: e.target.value })}
          />
          <button onClick={() => this.map.drawRoute(origin, destination, 'FLIGHT')}>Draw route!</button>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
