import React, { Component } from 'react';
import SimpleMap from './SimpleMap'
import TabableTravelInfo from "./TabableTravelInfo"
import "./TravelDetails.css"

class TravelDetails extends Component {

    tabBasedUpdate = (travelMode) => {
        const {origin,destination} = this.props.match.params;
        this.props.history.push('/Map/'+travelMode+'/'+origin+'/'+destination)
    }

    render() {


        const { travelMode, origin, destination } = this.props.match.params
        console.log(this.props)
        return (
            <div className="details-container">
                <SimpleMap
                    travelMode={travelMode}
                    origin={origin}
                    destination={destination}
                    ref={map => { this.map = map; }}
                />
                <TabableTravelInfo push={this.tabBasedUpdate} />
                <input

                    placeholder="start address here"
                    onChange={e => this.setState({ origin: e.target.value })}
                />
                <button onClick={() => console.log(this.map.getDestinationDistance())}>Draw route!</button>
            </div >
        )
    }
}

export default TravelDetails;