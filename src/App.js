import React, { Component } from 'react';
import logo from './logo.svg';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Homepage from './components/Homepage'
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
        <Homepage />
      </MuiThemeProvider>
    );
  }
}

export default App;
