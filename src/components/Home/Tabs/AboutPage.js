import React, { Component } from 'react';
import { Grid, Form, Input, TextArea } from 'semantic-ui-react';
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

        };
    }
    componentWillMount() {
    }

    render() {
        return (
            <div className="AboutPage">
                <div className="HeaderAboutBlock">
                    <Grid centered>
                        <div className="MainContainer">
                            <div className="FirstContainer share">
                                <h1>
                                    <span id="one">W</span><span>h</span><span>e</span><span>n</span> <span>W</span><span>e</span> <span>T</span><span>a</span><span>l</span><span>k</span>
                                </h1>
                            </div>
                            <div className="SecondContainer share">
                                <h1>
                                    <span>W</span><span>e</span> <span>M</span><span>o</span><span>v</span><span>e</span>
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
                                Where does it come from?
                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                            </p>
                        </Grid>
                    </div>
                </Animated>
                <Animated animationIn="bounceInLeft" animationOut="fadeOut" animationInDelay={2000} isVisible={true}>
                    <div className="FormBlock">
                        <Grid centered>
                            <Form>
                                <Form.Group widths='equal'>
                                    <Form.Field control={Input} label='First name' placeholder='First name' />
                                    <Form.Field control={Input} label='First name' placeholder='First name' />
                                </Form.Group>
                                <Form.Field control={TextArea} label='About' placeholder='Tell us more about you...' />
                            </Form>
                        </Grid>
                    </div>
                </Animated>
            </div>
        );
    }
}

export default AboutPage;
