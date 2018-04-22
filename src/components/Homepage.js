import React, { Component } from 'react';
import { Card, CardMedia, CardTitle, CardActions, CardHeader, CardText } from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import './Homepage.css';
import StateFarm from '../images/State-farm.png'
import Southwest from '../images/southwest.png'
import { RaisedButton } from 'material-ui';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }

    //Bind functions this.toggleHeadline = this.toggleHeadline.bind(this);
  }

  render() {
    return (
      <div className="Container">
        <h1 className="Header">Our Project Title Here</h1>

        <div className={["Box", "Text-center"].join(' ')}>
          <p className="Text-center">A Fuel Saver and Money Saver</p>
          <h2 className="Text-center"> What is the most energy efficient mode of transportation for my trip? </h2>
          <RaisedButton onClick={() => alert('hi')}
            backgroundColor = "#27ae60"
            labelStyle = {{
              textTransform: 'none',
              color: 'white',
            }}
            className = "Button"
            buttonStyle={{ height: '50px' }}
            label="Create a trip">
          </RaisedButton>
        </div>

        <div className="Footer">
          <Card className="Slide"
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
          <Card className="Slide">

          </Card>

          <Card className="Slide">
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
