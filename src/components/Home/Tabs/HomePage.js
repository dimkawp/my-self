import React, { Component } from 'react';
import './HomePage.css';
import { Parallax, Background } from 'react-parallax';
import BgOne from '../../../assets/Home/bg-one.jpg';
import {Animated} from "react-animated-css";
import $ from 'jquery';


class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showBanner: false
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
            if ($(this).scrollTop()>50)
            {
                $('.contentTitle').fadeIn("slow");
            }
            if ($(this).scrollTop()>450)
            {
                $('.contentTitle').addClass("scrollContent");
            }
            if ($(this).scrollTop()>750)
            {

                $('.contentDesc').fadeIn("slow");
                $('.contentTitle').css({position: 'fixed'});
            }
            if ($(this).scrollTop()<750)
            {
                $('.contentDesc').hide();
                $('.contentTitle').css({position: 'absolute'});
            }
            if ($(this).scrollTop()<450)
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
                            <div className="item">HOME</div>
                            <div className="item">DEMO</div>
                            <div className="item">ABOUT</div>
                        </div>
                    </div>
                    <div className="contentDesc">
                        <div className="title">
                            <Animated animationIn="bounceInLeft" animationOut="fadeOut" animationInDelay={1000} isVisible={true}>
                                <div>
                                    TITLE
                                </div>
                            </Animated>
                        </div>
                        <div className="desc">RANDOM TEXT</div>
                    </div>

                </div>
            </Animated>

        );
    }
}

export default HomePage;
