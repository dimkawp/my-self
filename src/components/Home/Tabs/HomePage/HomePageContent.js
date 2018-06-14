import React, { Component } from 'react';
import {Animated} from "react-animated-css";

class HomePageContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className="homePageContent">
                <div className="welcomeBlock">
                    <Animated animationIn="bounceInLeft" animationOut="fadeOut" animationInDelay={1500}>
                        <p>WELCOME</p>
                    </Animated>
                    <Animated animationIn="bounceInLeft" animationOut="fadeOut" animationInDelay={1750}>
                        <p>to</p>
                    </Animated>
                    <Animated animationIn="bounceInLeft" animationOut="fadeOut" animationInDelay={2000}>
                        <p>MY PRODUCTION</p>
                    </Animated>
                </div>
            </div>
        );
    }
}

export default HomePageContent;
