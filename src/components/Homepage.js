import React, { Component } from 'react';
import './Homepage.css';

export default class App extends Component {
      constructor(props){
        super(props);

        this.state = {

        }

        //Bind functions this.toggleHeadline = this.toggleHeadline.bind(this);
      }

      render(){
        return(
          <div className="Container">
            <h1 className="Header">Our Project Title Here</h1>

            <div className={["Box", "Text-center"].join(' ')}>
                <p className = "Text-center">A Fuel Saver and Money Saver</p>
                <h2 className = "Text-center"> What is the most energy efficient mode of transportation for my trip? </h2>
                <div className="Button">
                    <p className = "Text-white">Create a trip</p>
                </div>
            </div>

            <div className = "Footer">
                <div className = "Slide">
                    <div className = "Icon">
                    </div>
                    <h4>Get insurance rewards with State Farm</h4>
                    <h5>"State Farm is a long-time proponent of safe driving, but did you know that safer driving habits can also bring greener driving results?"</h5>
                    <a>"Learn more about Drive Safe and Save"</a>
                </div>
                <div className = "Slide">
                </div>
                <div className = "Slide">
                </div>

            </div>
          </div>
        )
      }
}
