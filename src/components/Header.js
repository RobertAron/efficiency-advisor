import React, { Component } from 'react';
import '../App.css';
import Background from '../images/background.png';

class Header extends Component {
  render() {
    return (
      <div>
        <h1 className="Header">greeNav</h1>
        <div
          style={{
            display: 'flex',
            height: '100px',
            position: 'absolute',
            top: '40px'
          }}>
          <img src={Background}
            className="Background" />
          <img src={Background}
            className="Background" />
        </div>
      </div>
    );
  }
}

export default Header;

