import React, { Component } from 'react';
import SimpleMap from './SimpleMap'

class TravelDetails extends Component {

    render() {
        const {travelMode,origin,destination} = this.props.match.params
        return (
            <div>
                <SimpleMap
                    travelMode = {travelMode}
                    origin = {origin}
                    destination = {destination}
                    ref={map => { this.map = map; }}
                />
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