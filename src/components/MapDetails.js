import React, { Component } from 'react';
import SimpleMap from './SimpleMap'

class MapDetails extends Component {

    state = {
        origin: '',
        destination: 'Arlingon, tX'
    }

    render() {
        const { origin, destination } = this.state;
        console.log(this.props)
        console.log(process.env)
        return (
            <div>
                <SimpleMap
                    ref={map => { this.map = map; }}
                />
                <input
                    placeholder="start address here"
                    onChange={e => this.setState({ origin: e.target.value })}
                />
                <button onClick={() => this.map.drawRoute(origin, destination, 'FLIGHT')}>Draw route!</button>
            </div >
        )
    }

}

export default MapDetails;