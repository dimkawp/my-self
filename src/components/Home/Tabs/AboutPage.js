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

    ChangeFormName = (event) => {
        this.setState({formName: event.target.value});
    }
    ChangeFormMail = (event) => {
        this.setState({formMail: event.target.value});
    }
    ChangeFormText = (event) => {
        this.setState({formText: event.target.value});
    }
    handleSubmit = (event) => {
        console.log('Name - ' + this.state.formName, 'Mail - ' + this.state.formMail, 'Text - ' + this.state.formText);
        event.preventDefault();
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
