import React, { Component } from 'react';
import { Card, CardMedia, CardTitle, CardActions, CardHeader, CardText } from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import './Homepage.css';
import StateFarm from '../images/State-farm.png'
import Southwest from '../images/southwest.png'
import { RaisedButton } from 'material-ui';
import { Link } from 'react-router-dom'
import './input-form.js'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.goForward = this.goForward.bind(this)
    this.goUber = this.goUber.bind(this)

    this.state = {

    }

    //Bind functions this.toggleHeadline = this.toggleHeadline.bind(this);
  }

  goForward() {
    this.props.history.push('/Form')
  }

  render() {
    return (
      <div className="Container">
        <div className={["Box", "Text-center"].join(' ')}>
          <p className="Text-center">A Fuel Saver and Money Saver</p>
          <h2 className="Text-center"> What is the most energy efficient mode of transportation for my trip? </h2>
          <RaisedButton
            backgroundColor = "#27ae60"
            labelStyle = {{
              textTransform: 'none',
              color: 'white',
            }}
            className = "Button"
            buttonStyle={{ 
              height: '50px' 
            }}
            label="Create a trip"
            onClick={this.goForward}>
            
          </RaisedButton>
        </div>

        <div className="Footer">
          <Card className="Slide"
          zDepth = {3}
          onClick = {() => window.location = 'https://www.statefarm.com/insurance/auto/discounts/drive-safe-save'}
          >
            <CardMedia
              className="Image">
              <img src={StateFarm} alt="" />
            </CardMedia>
            <Divider/>
            <CardTitle
              style={{
                margin: '15px'
              }}
              className="Title"
              title="Get insurance Rewards with State Farm" subtitle="State Farm® is a long-time proponent of safe driving. But did you know that safer driving habits can also bring greener driving results?" />
            <CardText>
              Learn more about State Farm's Drive Safe and Save
            </CardText>
            <CardActions>
            </CardActions>
          </Card>
          <Card className="Slide"
          zDepth = {3}
          onClick = {() => window.location = 'https://www.uber.com/ride/'}>

          </Card>

          <Card className="Slide"
          zDepth = {3}
          onClick = {() => window.location = 'https://www.southwest.com/flight/shortcut/low-fare-search.html'}>
            <CardMedia
              style={{
                width: '225px',
                marginTop: '50px',
                display: 'inline-block',
                paddingBottom: '45px'
              }}
              className="Image">
              <img src={Southwest} alt="" />
            </CardMedia>
            <Divider />
            <CardTitle
              style={{
                marginTop: '55px',
              }}
              className="Title"
              title="Need a flight? Try Southwest" subtitle="" />
            <CardText>
              Southwest was named one of Four Most Fuel Efficient Airlines for Domestic arlines by the internation Council on Clean Transportation in 2015.
            </CardText>
            <CardActions>
            </CardActions>
          </Card>

        </div>
      </div>
    )
  }
}
