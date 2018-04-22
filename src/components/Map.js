import React from 'react';
import { withGoogleMap,GoogleMap, Marker, DirectionsRenderer } from "react-google-maps"

const Map = withGoogleMap(props => (
  <GoogleMap {...props}>
		{props.directions && <DirectionsRenderer directions={props.directions} />}
	</GoogleMap>)
);

export default Map;