import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views';
import Paper from 'material-ui/Paper';
import './TabableTravelInfo.css'



class TabableTravelInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slideIndex: 0,
        };
    }

    handleChange = (value) => {
        this.setState({
            slideIndex: value,
        });
        switch (value) {
            case 0: this.props.push("DRIVING");break;
            case 1: this.props.push("WALKING");break;
            case 2: this.props.push("BICYCLING");break;
            case 3: this.props.push("TRANSIT");break;
            case 4: this.props.push("FLIGHT");break;
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
                        <p>DRIVING</p>
                    </div>
                    <div>
                        <p>WALKING</p>
                    </div>
                    <div>
                        <p>BICYCLING</p>
                    </div>
                    <div>
                        <p>TRANSIT</p>
                    </div>
                    <div>
                        <p>FLIGHT</p>
                    </div>
                </SwipeableViews>
            </Paper>
        );
    }
}

export default TabableTravelInfo;