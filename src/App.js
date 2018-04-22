import React, { Component } from 'react';
import logo from './logo.svg';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Homepage from './components/Homepage'
import './App.css';
import InputForm from "./components/input-form"
import MapDetails from "./components/MapDetails"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <Route exact path="/" component={Homepage} />
            <Route path="/Form" component={InputForm}/>
            <Route path="/Map/:id?/:type?" component={MapDetails} />
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
