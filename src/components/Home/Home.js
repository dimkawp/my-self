import React, { Component } from 'react';
import { Tab } from 'semantic-ui-react';
import './Home.css';
import HomePage from './Tabs/HomePage';
import DemoPage from './Tabs/DemoPage';
import AboutPage from './Tabs/AboutPage';
import { Animated } from "react-animated-css";
import VideoBG from '../../assets/Video/Graphic.mp4';
import $ from 'jquery';
//icons
import MenuIcon from 'react-icons/lib/fa/align-justify';
import Preloader from "./Prleloader";

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
    { menuItem: <MenuIcon key="menuIconKey" className="menuIcon" />, render: () =>
        <Tab.Pane attached={false}>
        </Tab.Pane>
    }
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

    render() {
        return (
            <div className="home">
                <Preloader/>
                <div className="menuBlock">
                    <div className="items">
                        <div className="item"><a href="">HOME</a></div>
                        <div className="item"><a href="">INFO</a></div>
                        <div className="item"><a href="">ABOUT</a></div>
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
