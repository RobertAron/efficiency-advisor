import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views';
import Paper from 'material-ui/Paper';
import './TabableTravelInfo.css'



class TabableTravelInfo extends Component {
    constructor(props) {
        super(props);
        let slideIndex;
        switch (props.travelMode) {
            case "DRIVING": slideIndex = 0; break;
            case "WALKING": slideIndex = 1; break;
            case "BICYCLING": slideIndex = 2; break;
            case "TRANSIT": slideIndex = 3; break;
            case "FLIGHT": slideIndex = 4; break;
        }
        this.state = {
            slideIndex,
            drivingDistance: 0,
            walkingDistance:0,
            bicyclingDistance:0,
            transitDistance:0,
            flightDistnace:0
        }
    }

    componentWillMount(){
        setTimeout(()=>this.setCurrentStateDistance(), 1500);
    }

    setCurrentStateDistance(){
        switch(this.state.slideIndex){
            case 0: this.setState({drivingDistance: this.props.getDistance().text}); break;
            case 1: this.setState({walkingDistance: this.props.getDistance().text}); break;
            case 2: this.setState({bicyclingDistance: this.props.getDistance().text}); break;
            case 3: this.setState({transitDistance: this.props.getDistance().text}); break;
            case 4: this.setState({flightDistnace: this.props.getDistance().text}); break;
        }
    }

    setSlideBasedString(travelMode) {
        switch (travelMode) {
            case "DRIVING": this.setState({ slideIndex: 0 }); break;
            case "WALKING": this.setState({ slideIndex: 1 }); break;
            case "BICYCLING": this.setState({ slideIndex: 2 }); break;
            case "TRANSIT": this.setState({ slideIndex: 3 }); break;
            case "FLIGHT": this.setState({ slideIndex: 4 }); break;
        }
    }

    componentWillReceiveProps(nextProps, nextState) {
        this.setSlideBasedString(nextProps.travelMode);
        setTimeout(()=>this.setCurrentStateDistance(), 200);
        console.log(this.state)
    }

    handleChange = (value) => {
        switch (value) {
            case 0: this.props.push("DRIVING"); break;
            case 1: this.props.push("WALKING"); break;
            case 2: this.props.push("BICYCLING"); break;
            case 3: this.props.push("TRANSIT"); break;
            case 4: this.props.push("FLIGHT"); break;
        }
    };

    render() {
        return (
            <Paper className="tabablePaper" zDepth={3}>
                <Tabs
                    onChange={this.handleChange}
                    value={this.state.slideIndex}>
                    <Tab label="DRIVING" value={0} />
                    <Tab label="WALKING" value={1} />
                    <Tab label="BICYCLING" value={2} />
                    <Tab label="TRANSIT" value={3} />
                    <Tab label="FLIGHT" value={4} />
                </Tabs>
                <SwipeableViews
                    index={this.state.slideIndex}
                    onChangeIndex={this.handleChange}
                >
                    <div>
                        <p>{this.state.drivingDistance}</p>
                    </div>
                    <div>
                        <p>{this.state.walkingDistance}</p>
                    </div>
                    <div>
                        <p>{this.state.bicyclingDistance}</p>
                    </div>
                    <div>
                        <p>{this.state.transitDistance}</p>
                    </div>
                    <div>
                        <p>{this.state.flightDistnace}</p>
                    </div>
                </SwipeableViews>
            </Paper>
        );
    }
}

export default TabableTravelInfo;