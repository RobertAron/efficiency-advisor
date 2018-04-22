import React, { Component } from 'react';
import SimpleMap from './SimpleMap'
import TabableTravelInfo from "./TabableTravelInfo"
import RaisedButton from 'material-ui/RaisedButton';
import "./TravelDetails.css"

class TravelDetails extends Component {
    state = { 
        year: 1999,
        make: "Camry",
        model: "Toyota",
    };


    tabBasedUpdate = (travelMode) => {
        const {origin,destination} = this.props.match.params;
        this.props.history.push('/Map/'+travelMode+'/'+origin+'/'+destination)
    }

    constructor(props){
        super(props)
        if(props.match.params.year) this.setState({year: props.match.params.year});
        if(props.match.params.make) this.setState({make: props.match.params.make});
        if(props.match.params.model) this.setState({model: props.match.params.model});
        setTimeout(()=>console.log(props),3000);
    }

    componentWillReceiveProps(nextProps, nextState){
        if(nextProps.year) this.setState({year: nextProps.year});
        if(nextProps.make) this.setState({make: nextProps.make});
        if(nextProps.model) this.setState({model: nextProps.model});
    }

    render() {

        const { travelMode, origin, destination } = this.props.match.params
        console.log(this.props.match.params.travelMode)
        return (
            <div className="details-container">
                <SimpleMap
                    travelMode={travelMode}
                    origin={origin}
                    destination={destination}
                    ref={map => { this.map = map; }}
                />
                <RaisedButton
                    className="createTripButton"
                    label="Plan New Trip"
                    onClick={ () => {this.props.history.push('/')}}
                />
                <RaisedButton
                    className="aboutUsButton"
                    label="About Us"
                />
                <TabableTravelInfo 
                    push={this.tabBasedUpdate} 
                    getDistance={() => this.map.getDestinationDistance()}
                    travelMode = {this.props.match.params.travelMode}
                    year = {this.state.year}
                    make = {this.state.make}
                    model = {this.state.model}/>
            </div >
        )
    }
}

export default TravelDetails;