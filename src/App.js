import React, { Component } from 'react';
import logo from './logo.svg';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Homepage from './components/Homepage'
import './App.css';
import InputForm from "./components/input-form"
import TravelDetails from "./components/TravelDetails"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from './components/Header';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {green700,green900,teal100} from 'material-ui/styles/colors';


const muiTheme = getMuiTheme({
  palette:{
    primary1Color: green900,
    primary2Color: green900,
    accent1Color: teal100,
    pickerHeaderColor: teal100
  }
})

class App extends Component {
  scriptLoaded = false;



  render() {
    return (
      <div>
        {/* <Header /> */}
        <Router>
          <MuiThemeProvider muiTheme={muiTheme}>
            <div className="App">
              <Route exact path="/" component={Homepage} />
              <Route path="/Form" component={InputForm}/>
              <Route path="/Map/:travelMode(DRIVING|WALKING|BICYCLING|TRANSIT|FLIGHT)/:origin/:destination/:year?/:make?/:model?" component={TravelDetails} />
            </div>
          </MuiThemeProvider>
        </Router>
      </div>
    );
  }
}

export default App;
