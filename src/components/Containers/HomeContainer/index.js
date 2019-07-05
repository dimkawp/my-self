import React, { Component } from 'react';
import '../../../assets/scss/Containers/HomeContainer/index.css';

class HomeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Animate: false,
            HomeClick: false
        }
    }

    render() {
        return (
            <div className="HomeContainer">
                home 123
            </div>
        );
    }
}

export default HomeContainer;
