import React, { Component } from 'react';
//Css
import './AboutPage.css';
//Components
import FormBlock from './AboutPage/FormBlock';
import SocialBlock from './AboutPage/SocialBlock';
import TextInfoBlock from "./AboutPage/TextInfoBlock";
import HeaderAboutBlock from './AboutPage/HeaderAboutBlock';

class AboutPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentWillMount() {
    }

    render() {
        return (
            <div className="AboutPage">
                <HeaderAboutBlock />
                <SocialBlock />
                <TextInfoBlock />
                <FormBlock />
            </div>
        );
    }
}

export default AboutPage;
