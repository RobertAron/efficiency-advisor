import React, { Component } from 'react';
import { MapsAddLocation } from 'material-ui';

import Map from './Map';
const google = window.google;

class SimpleMap extends Component {
	static defaultProps = {
		center: {
			lat: 32.9,
			lng: -96.5
		},
		zoom: 10
	};

	state = {
		startLocation: null,
		endLocation: null,
		direction: null
	};

	drawRoute = () => {
		const origin = "Carrollton"
		const destination = "2460 Jefferson Court Ln, Arlington Texas"
		const travelMode = "DRIVING"

		// Scope
		const self = this;

		this.directionsService.route({
			// waypoints: waypts,
			// optimizeWaypoints: true,
			origin,
			destination,
			travelMode
		}, function(directions, status) {
			if (status === 'OK') {
				self.setState({ directions });
			} else {
				alert('Directions request failed due to ' + status);
			}
		});
	}

	componentDidMount() {
		this.directionsService = new google.maps.DirectionsService;
		this.drawRoute();
	}



	render() {
		return (
			// Important! Always set the container height explicitly
			<div style={{ height: '50vh', width: '100%' }}>
				<Map
					loadingElement={<div style={{ height: `100%` }} />}
					containerElement={<div style={{ height: `400px` }} />}
					mapElement={<div style={{ height: `100%` }} />}
					defaultCenter={this.props.center}
					defaultZoom={this.props.zoom}
					route={this.state.route}
					directions={this.state.directions}
				/>
			</div>
		);
	}
}




export default SimpleMap;