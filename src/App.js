import React, { Component } from 'react';
import logo from './logo.svg';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Homepage from './components/Homepage'
import './App.css';


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Homepage />
      </MuiThemeProvider>
    );
  }
}

export default App;
