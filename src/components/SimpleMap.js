import React, { Component } from 'react';
import Paper from 'material-ui/Paper'

import Map from './Map';
const google = window.google;

const numberWithCommas = (x) => {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

//This function takes in latitude and longitude of two location and returns the distance between them as the crow flies (in km)
function calcCrow(lat1, lon1, lat2, lon2) {
	const km2mi = 0.621371;//miles in 1 kilometer
	var R = 6371; // km
	var dLat = toRad(lat2 - lat1);
	var dLon = toRad(lon2 - lon1);
	var lat1 = toRad(lat1);
	var lat2 = toRad(lat2);

	var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
		Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
	var d = R * c;
	return d*km2mi;
}

// Converts numeric degrees to radians
function toRad(Value) {
	return Value * Math.PI / 180;
}




class SimpleMap extends Component {
	static defaultProps = {};

	state = {
		startLocation: null,
		endLocation: null,
		directions: null,
		flightPath: null,
		destinationDistance: null,
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
					console.log(directions.routes[0].legs[0].distance.text)
					const { start_location, end_location } = directions.routes[0].legs[0];
					const flightPath = [
						{ lat: start_location.lat(), lng: start_location.lng() },
						{ lat: end_location.lat(), lng: end_location.lng() }
					];
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
		const { origin, destination, travelMode } = this.props
		this.drawRoute(origin, destination, travelMode);
	}

	getDestinationDistance() {
		if(this.props.travelMode=="FLIGHT"){
			const lat1 = this.state.flightPath[0].lat
			const lng1 = this.state.flightPath[0].lng
			const lat2 = this.state.flightPath[1].lat
			const lng2 = this.state.flightPath[1].lng
			const miles = calcCrow(lat1,lng1,lat2,lng2)
			const formatedDistance = numberWithCommas(miles.toFixed()) + " mi"
			const value = (1609.773676880223 * miles).toFixed();
			return {text: formatedDistance, value}
		}
		return this.state.directions.routes[0].legs[0].distance;
	}

	componentWillReceiveProps(nextProps, nextState) {
		const { origin, destination, travelMode } = nextProps;
		this.drawRoute(origin, destination, travelMode);
	}



	render() {
		return (
			// Important! Always set the container height explicitly
			<Paper style={{ height: '40%', width: '40%' }} zDepth={3}>
				<Map
					loadingElement={<div style={{ height: `100%` }} />}
					containerElement={<div style={{ height: `400px` }} />}
					mapElement={<div style={{ height: `100%` }} />}
					defaultCenter={{ lat: 40, lng: -95 }}
					defaultZoom={4}
					directions={this.state.directions}
					flightPath={this.state.flightPath}
				/>
			</Paper>
		);
	}
}




export default SimpleMap;