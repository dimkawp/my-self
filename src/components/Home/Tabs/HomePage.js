import React, { Component } from 'react';
import './HomePage.css';
import { Parallax, Background } from 'react-parallax';
import BgOne from '../../../assets/Home/bg-one.jpg';
import {Animated} from "react-animated-css";
import Clock from 'react-live-clock';
import $ from 'jquery';
//icons
import IconRepeat from 'react-icons/lib/fa/repeat'
import IconGithub from 'react-icons/lib/fa/github'
import IconWindows from 'react-icons/lib/fa/windows'




class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showBanner: false,
            clock: new Date()
        }
    }

    componentDidMount() {
        $(document).ready(function() {
            $('.contentTitle').hide();
            $('.contentDesc').hide();
            $('.welcomeBlock').hide();
        });
        $('.parallax').mouseover(function () {
            $('.welcomeBlock').show();
        });
        $('.parallax').mouseout(function () {
            $('.welcomeBlock').hide();
        });

        $(window).scroll(function() {
            if ($(this).scrollTop()>750)
            {
                $('.contentTitle').fadeIn("slow");
                $('.contentTitle').addClass("scrollContent");
                $('.contentDesc').fadeIn("slow");
                $('.contentTitle').css({position: 'fixed'});
            }
            if ($(this).scrollTop()<750)
            {
                $('.contentDesc').hide();
                $('.contentTitle').css({position: 'absolute'});
            }
            if ($(this).scrollTop()<700)
            {
                $('.contentTitle').removeClass("scrollContent");
            }
            if ($(this).scrollTop()<50)
            {
                $('.contentTitle').fadeOut("slow");
            }
        });

    }

    render() {
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        const d = new Date();
        return (
            <Animated animationIn="flash" animationOut="fadeOut" animationInDelay={500} isVisible={true}>
                <div className="HomePage">
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
                    <Parallax className="parallax" strength={500}>
                        <Background className="custom-bg">
                            <img src={BgOne} alt="fill murray" />
                        </Background>
                    </Parallax>
                    <div className="contentTitle">
                        <div id="secondMenu" className="items">
                            <div className="item"><IconRepeat size={50} /></div>
                            <div className="item"><IconGithub size={50} /></div>
                            <div className="item"><IconWindows size={50} /></div>
                        </div>
                    </div>
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
                </div>
            </Animated>
        );
    }
}

export default HomePage;
