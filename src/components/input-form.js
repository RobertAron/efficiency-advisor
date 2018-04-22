import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField'
import { Link } from 'react-router-dom'
var classNames = require('classnames');

class InputForm extends Component {
	constructor(props) {
	super(props);
	this.goForward = this.goForward.bind(this);
    this.state = { 
			FormCompletetion: 0,
			forwardAnimation: true,
			inputTerm: '',
			carMake: '',
			carModel: '',
			carYear: '',
			startingLocation: '',
			endingLocation: '',
			hiddenBackButton: true
		};
	}

	goForward(){
		this.props.history.push('/Map');
	}
	

	render() {
		{console.log(this.state.hiddenBackButton)}
		// {console.log(this.state.FormCompletetion)}
		let div = classNames( 'div', {
			'animated bounceInLeft': ( this.props.selected ),
			'animated bounceInLeft': this.state.forwardAnimation === true,
			'animated bounceOutLeft': this.state.forwardAnimation === false
			
		});
		let formButton = classNames( 'formButton', {
			'hidden': this.state.hiddenBackButton === true,
			'': this.state.hiddenBackButton === false
		} );

		let fields = [
			{text: 'Enter Car Make', stateString: "carMake"},
				{text: 'Enter Car Model',  stateString: "carModel"},
				{text: 'Enter Car Year',  stateString: "carYear"},
				{text: 'Enter starting Location',  stateString: "startingLocation"},
				{text: 'Enter ending Location',  stateString: "endingLocation"}];

		return (
			<div className="formInputs">
				<div className={div}>
					
					<div className={formButton}>
						<RaisedButton
							label="Back"
							onClick={ (e) => {
								this.setState({ FormCompletetion: this.state.FormCompletetion - 1, forwardAnimation: false})
									setTimeout(() => {
										this.state.FormCompletetion === 0 ? this.setState({hiddenBackButton: true}) : this.setState({hiddenBackButton: false})
										this.setState({forwardAnimation: true})
									}, 300);
								this.textInput.input.value = ''

							}}
						/>
					</div>

					<TextField 
						ref={x => this.textInput = x}
						hintText={fields[this.state.FormCompletetion].hint}
						floatingLabelText={fields[this.state.FormCompletetion].text}
						onChange={ (e) => {
							this.setState({ [fields[this.state.FormCompletetion].stateString] : e.target.value })
						} }
					/>
					
					<RaisedButton
						label="Enter"
						onClick={ (e) => {
							this.setState({ FormCompletetion: this.state.FormCompletetion + 1, forwardAnimation: false})
							setTimeout(() => {
								this.setState({forwardAnimation: true})
								this.state.FormCompletetion >= 1 && this.setState({hiddenBackButton: false})
							}, 30);
							this.textInput.input.value = ''
						}}
					/>

				</div>
			</div>
		);
	}
}

export default InputForm;