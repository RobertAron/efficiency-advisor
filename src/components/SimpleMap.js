import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import polyline from '@mapbox/polyline'
import { MapsAddLocation } from 'material-ui';

const Pin = () => <img src="http://barkpost-assets.s3.amazonaws.com/wp-content/uploads/2013/11/3dDoge.gif" alt="pin" height="50" width="50" />

function encodeQueryData(data) {
	let ret = [];
	for (let d in data)
		ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
	return ret.join('&');
}

class SimpleMap extends Component {
	static defaultProps = {
		center: {
			lat: 32.9,
			lng: -96.5
		},
		zoom: 10
	};
	constructor() {
		super()
		this.state = {
			startLocation: null,
			endLocation: null
		}
	}

	drawRoute() {
		const origin = "Carrollton"
		const destination = "Dallas"
		const mode = "driving"
		const key = process.env.REACT_APP_DIRECTIONS_API_KEY
		const call = {
			origin: origin,
			destination: destination,
			mode: mode,
			key: key
		}
		const routeQuery = "https://maps.googleapis.com/maps/api/directions/json?" + encodeQueryData(call);
		console.log("NEW ROUTE QUERIED: " + routeQuery)
		fetch(routeQuery)
			.then(response => response.json())
			.then(mapJson => {
				console.log("HERE: ")
				console.log(polyline.decode(mapJson.routes[0].overview_polyline.points))
				const startLocation = mapJson.routes[0].legs[0].start_location
				const endLocation = mapJson.routes[0].legs[0].end_location
				this.setState({
					startLocation: startLocation,
					endLocation: endLocation
				}, () => {
					console.log(this.state);
				})
			})
	}

	componentDidMount() {
		this.drawRoute();
	}



	render() {
		return (
			// Important! Always set the container height explicitly
			<div style={{ height: '50vh', width: '100%' }}>
				<GoogleMapReact
					bootstrapURLKeys={{ key: process.env.REACT_APP_GMAP_TOKEN }}
					defaultCenter={this.props.center}
					defaultZoom={this.props.zoom}
				>
					{this.state.startLocation &&
						<Pin
							lat={this.state.startLocation.lat}
							lng={this.state.startLocation.lng} />
					}
					{this.state.startLocation &&
						<Pin
							lat={this.state.endLocation.lat}
							lng={this.state.endLocation.lng} />
					}

				</GoogleMapReact>
			</div>
		);
	}
}




export default SimpleMap;