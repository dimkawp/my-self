import React, { Component } from 'react';
//Components
import ContentDesc from './HomePage/ContentDesc';
import ContentTitle from './HomePage/ContentTitle';
import HomePageContent from './HomePage/HomePageContent';
//Css
import './HomePage.css';
import BgOne from '../../../assets/Home/bg-one.jpg';
//External
import $ from 'jquery';
import { Animated } from "react-animated-css";
import { Parallax, Background } from 'react-parallax';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showBanner: false
        }
    }
//JQ
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
        return (
            <Animated animationIn="flash" animationOut="fadeOut" animationInDelay={500} isVisible={true}>
                <div className="HomePage">
                    <HomePageContent />
                    <Parallax className="parallax" strength={500}>
                        <Background className="custom-bg">
                            <img src={BgOne} alt="fill murray" />
                        </Background>
                    </Parallax>
                    <ContentTitle />
                    <ContentDesc />
                </div>
            </Animated>
        );
    }
}

export default HomePage;
