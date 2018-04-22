import React, { Component } from 'react';

import Map from './Map';
const google = window.google;

class SimpleMap extends Component {
	static defaultProps = {};

	state = {
		startLocation: null,
		endLocation: null,
		direction: null,
		flightPath: null,
	};


	drawRoute = (origin, destination, travelMode) => {
		// const origin = "Carrollton"
		// const destination = "2460 Jefferson Court Ln, Arlington Texas"
		// const travelMode = "DRIVING"

		// Scope
		const self = this;
		if (travelMode !== "FLIGHT") {
			this.directionsService.route({
				// waypoints: waypts,
				// optimizeWaypoints: true,
				origin,
				destination,
				travelMode
			}, function (directions, status) {
				if (status === 'OK') {
					self.setState({
						directions,
						flightPath: null
					});
				} else {
					alert('Directions request failed due to ' + status);
				}
			});
		} else {

			const flightPath = [
				{ lat: 40, lng: -95 },
				{ lat: 35, lng: -105 }
			];


			this.setState({
				flightPath,
				directions: null
			})
		}
	}

	componentDidMount() {
		this.directionsService = new google.maps.DirectionsService();
	}



	render() {
		return (
			// Important! Always set the container height explicitly
			<div style={{ height: '50vh', width: '100%' }}>
				<Map
					loadingElement={<div style={{ height: `100%` }} />}
					containerElement={<div style={{ height: `400px` }} />}
					mapElement={<div style={{ height: `100%` }} />}
					defaultCenter={{ lat: 40, lng: -95 }}
					defaultZoom={4}
					directions={this.state.directions}
					flightPath={this.state.flightPath}
				/>
			</div>
		);
	}
}




export default SimpleMap;