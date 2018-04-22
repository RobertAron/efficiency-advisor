import React, { Component } from 'react';
import './SwipeableViewComponet.css'
import Warning from 'material-ui/svg-icons/alert/warning';
import { grey50 } from 'material-ui/styles/colors';
import StateFarm from '../images/State-farm-small.png';
import SouthWest from '../images/southwest.png';
import { height } from 'window-size';

class SwipeableViewComponet extends Component {
	constructor(props) {
		super(props);

		this.state = {
			LongDistance: false
		};
	}

	componentWillUpdate() {

	}

	render() {

		let travelModes = ["Driving", "Walking", "Bicyling", "Transit", "Flight"]

		return (
			<div>
				{((this.props.travelMode === 1 || this.props.travelMode === 2) && (this.props.distance.length > 1)) &&
					<div>
						<div className="warning">
							<Warning style={grey50} />
							<p> Warning: there is a high distance and lack of sidewalks. This may not be the best option</p>
						</div>
						<p>Your total {travelModes[this.props.travelMode]} distance would be {this.props.distance} </p>

					</div>
				}

				{((this.props.travelMode === 1 || this.props.travelMode === 2) && (this.props.distance.length < 1)) &&
					<div>
						<p>Your total {travelModes[this.props.travelMode]} distance is {this.props.distance} </p>
						<p>{Number.parseInt(this.props.distance.replace(/,/g, "")) / 25} gal will be used</p>
					</div>
				}


				{((this.props.travelMode === 0 || this.props.travelMode > 2) && (this.props.distance.length > 1)) &&
					<div>
						{this.props.make && <p>MPG Calculated Using {this.props.model} {this.props.make} {this.props.year} </p>}
						<p>Your total {travelModes[this.props.travelMode]} distance is {this.props.distance} </p>
						<p> {Number.parseInt(this.props.distance.replace(/,/g, "")) / 25} gal will be used</p>
					</div>
				}


				{((this.props.travelMode === 0)) &&
					<div className="hint">
						<img src={StateFarm} alt="" />
						<p> Learn about how safer driving habits can also bring greener driving </p>
					</div>
				}

				{((this.props.travelMode === 4)) &&
					<div className="hint">
						<img src={SouthWest} alt="" className="southwestlogo" />
						<p> Click to book a flight today and save! </p>
					</div>
				}


			</div>
		);
	}
}

export default SwipeableViewComponet;