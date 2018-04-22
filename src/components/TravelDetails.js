import React, { Component } from 'react';
import SimpleMap from './SimpleMap'
import TabableTravelInfo from "./TabableTravelInfo"
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
        if(props.year) this.setState({year: props.year});
        if(props.make) this.setState({make: props.make});
        if(props.model) this.setState({model: props.model});
        setTimeout(()=>console.log(this.state),3000);
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
                <TabableTravelInfo 
                    push={this.tabBasedUpdate} 
                    getDistance={() => this.map.getDestinationDistance()}
                    travelMode = {this.props.match.params.travelMode}
                    year = {this.state.year}/>
                    make = {this.state.make}/>
                    model = {this.state.model}/>
            </div >
        )
    }
}

export default TravelDetails;