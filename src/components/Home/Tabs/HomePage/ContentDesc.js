import React, { Component } from 'react';
import Clock from 'react-live-clock';
import {Animated} from "react-animated-css";

class ContentDesc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clock: new Date()
        }
    }

    render() {
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        const d = new Date();
        return (
            <div className="contentDesc">
                <Animated animationIn="bounceInLeft" animationOut="fadeOut" animationInDelay={1000} isVisible={true}>
                    <div className="timeBlock">
                        <Clock
                            className="clock"
                            format={'h:mm:ss'}
                            ticking={true}
                        />
                        <div className="month">
                            <span>{this.state.clock.getDate()}</span>
                            <span>{monthNames[d.getMonth()]}</span>
                        </div>
                    </div>
                </Animated>
            </div>
        );
    }
}

export default ContentDesc;
