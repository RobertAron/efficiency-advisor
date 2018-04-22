import React from 'react';
import { withGoogleMap,GoogleMap, DirectionsRenderer } from "react-google-maps"
import PolyLine from "react-google-maps/lib/components/Polyline";
const Map = withGoogleMap(props => (
  <GoogleMap {...props}>
		{props.directions && <DirectionsRenderer directions={props.directions} />}
		{props.flightPath && <PolyLine path={props.flightPath}/>}
	</GoogleMap>)
);

export default Map;