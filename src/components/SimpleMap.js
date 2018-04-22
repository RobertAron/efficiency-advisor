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


	drawRoute = async (origin, destination, travelMode) => {

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
			this.directionsService.route({
				origin,
				destination,
				travelMode: "DRIVING"
			}, function (directions, status) {
				if (status === 'OK') {
					const { start_location,end_location} =  directions.routes[0].legs[0];
					const flightPath = [
						{ lat: start_location.lat(), lng: start_location.lng() },
						{ lat: end_location.lat(), lng: end_location.lng() }
					];
					console.log(directions.routes[0].legs[0].start_location)
					self.setState({
						flightPath,
						directions: null
					})
				} else {
					alert('Directions request failed due to ' + status);
				}
			})
		}
	}

	componentDidMount() {
		this.directionsService = new google.maps.DirectionsService();
		const { origin, destination, travelMode }  = this.props
		this.drawRoute(origin,destination,travelMode);
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