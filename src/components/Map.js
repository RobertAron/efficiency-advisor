import React from 'react';
import { withGoogleMap,GoogleMap, DirectionsRenderer } from "react-google-maps"
import PolyLine from "react-google-maps/lib/components/Polyline";
const Map = withGoogleMap(props => (
  <GoogleMap {...props}>
		{props.directions && <DirectionsRenderer directions={props.directions} options={{polylineOptions: {strokeColor: "#1b5e20",}}}/>}
		{props.flightPath && <PolyLine path={props.flightPath} options={{strokeColor: "#1b5e20",}}/>}
		
	</GoogleMap>)

	
);


export default Map;