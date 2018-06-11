import React, { Component } from 'react';
import { Grid, Form, Input, TextArea, Button } from 'semantic-ui-react';
import {Animated} from "react-animated-css";
import './AboutPage.css';
//icons
import IconGitHub from 'react-icons/lib/fa/git-square';
import IconYouTube from 'react-icons/lib/fa/youtube';
import IconFaceBook from 'react-icons/lib/fa/facebook-square';

class AboutPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formName: '',
            formMail: '',
            formText: ''

        };
    }
    componentWillMount() {
    }

    handleChangeTextMessage = (e) => {
        this.setState({TextMessage: e.target.value});
        console.log(this.state.TextMessage);
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
                <div className="HeaderAboutBlock">
                    <Grid centered>
                        <div className="MainContainer">
                            <div className="FirstContainer share">
                                <h1>
                                    <span id="one">W</span><span>r</span><span>i</span><span>t</span><span>e</span> <span>m</span><span>e</span>
                                </h1>
                            </div>
                            <div className="SecondContainer share">
                                <h1>
                                    <span>I</span><span>f</span> <span>I</span><span>n</span><span>t</span><span>e</span><span>r</span><span>e</span><span>s</span><span>t</span><span>i</span><span>n</span><span>g</span>
                                </h1>
                            </div>
                        </div>
                    </Grid>
                </div>
                <Animated animationIn="bounceInLeft" animationOut="fadeOut" animationInDelay={1000} isVisible={true}>
                    <div className="SocialBlock">
                        <Grid centered>
                            <div className="item"><a href="https://www.facebook.com/dimkawp.bond.7" target="_blank"><IconFaceBook size={20}/></a></div>
                            <div className="item"><a href="https://www.youtube.com/channel/UCFRA75dCkcCD9X-QevTu4Qw/videos" target="_blank"><IconYouTube size={20}/></a></div>
                            <div className="item"><a href="https://github.com/dimkawp" target="_blank"><IconGitHub size={20}/></a></div>
                        </Grid>
                    </div>
                </Animated>
                <Animated animationIn="bounceInRight" animationOut="fadeOut" animationInDelay={1500} isVisible={true}>
                    <div className="TextInfoBlock">
                        <Grid centered>
                            <p>

                            </p>
                        </Grid>
                    </div>
                </Animated>
                <Animated animationIn="bounceInLeft" animationOut="fadeOut" animationInDelay={2000} isVisible={true}>
                    <div className="FormBlock">
                        <Grid centered>
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group widths='equal'>
                                    <Form.Field control={Input} label='Name' placeholder='Name'  value={this.state.formName} onChange={this.ChangeFormName} />
                                    <Form.Field control={Input} label='Mail' placeholder='Mail' value={this.state.formMail} onChange={this.ChangeFormMail}/>
                                </Form.Group>
                                <Form.Field control={TextArea} label='Text' placeholder='Tell us more about you...' value={this.state.formText} onChange={this.ChangeFormText}/>
                                <div className="subBlock">
                                    <Button type='submit'>Submit</Button>
                                </div>

                            </Form>
                        </Grid>
                    </div>
                </Animated>
            </div>
        );
    }
}

export default AboutPage;
