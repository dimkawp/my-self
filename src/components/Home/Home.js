import React, { Component } from 'react';
import { Tab, Button } from 'semantic-ui-react';
import './Home.css';
import HomePage from './Tabs/HomePage';
import DemoPage from './Tabs/DemoPage';
import AboutPage from './Tabs/AboutPage';
import { Animated } from "react-animated-css";
import VideoBG from '../../assets/Video/Graphic.mp4';
import $ from 'jquery';
//icons
import MenuIcon from 'react-icons/lib/fa/align-justify';

const panes = [
    { menuItem: 'HOME', render: () =>
        <Tab.Pane className="homeTab" attached={false}>
            <HomePage/>
        </Tab.Pane> },
    { menuItem: 'DEMO', render: () =>
        <Tab.Pane attached={false}>
            <DemoPage/>
        </Tab.Pane> },
    { menuItem: 'ABOUT', render: () =>
        <Tab.Pane attached={false}>
            <AboutPage/>
        </Tab.Pane> },
];

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Animate: false,
            HomeClick: false
        }
    }

    componentDidMount() {
        $(document).ready(function() {
            $('.menuBlock').hide();
        });
        $(".menuIcon").click(function(){
            $(".menuBlock").toggle("slow");
        });

    }
    clickHome = () => {
        this.setState({
            HomeClick: !this.state.HomeClick
        });
    }

    AnimateClick = () => {
        this.setState({
            Animate: !this.state.Animate
        });
        console.log(this.state.Animate);

    }

    render() {
        return (
            <div className="home">
                <MenuIcon className="menuIcon" />
                <div className="menuBlock">
                    <div className="items">
                        <div className="item">HOME</div>
                        <div className="item">INFO</div>
                        <div className="item">ABOUT</div>
                    </div>
                </div>
                <video poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/polina.jpg" id="myVideo" playsInline autoPlay muted loop>
                    <source src={VideoBG} type="video/webm"/>
                    <source src={VideoBG} type="video/mp4"/>
                </video>
                <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
            </div>
        );
    }
}

export default Home;
