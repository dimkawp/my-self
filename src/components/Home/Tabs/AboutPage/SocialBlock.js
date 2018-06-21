import React, { Component } from 'react';
//External
import { Animated } from "react-animated-css";
import { Grid } from 'semantic-ui-react';
//icons
import IconGitHub from 'react-icons/lib/fa/git-square';
import IconYouTube from 'react-icons/lib/fa/youtube';
import IconFaceBook from 'react-icons/lib/fa/facebook-square';

class SocialBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className="SocialBlock" id="socialBlockId">
                <Animated animationIn="bounceInLeft" animationOut="fadeOut" animationInDelay={1000} isVisible={true}>
                    <Grid centered>
                        <div className="item"><a href="https://www.facebook.com/dimkawp.bond.7" target="_blank"><IconFaceBook size={20}/></a></div>
                        <div className="item"><a href="https://www.youtube.com/channel/UCFRA75dCkcCD9X-QevTu4Qw/videos" target="_blank"><IconYouTube size={20}/></a></div>
                        <div className="item"><a href="https://github.com/dimkawp" target="_blank"><IconGitHub size={20}/></a></div>
                    </Grid>
                </Animated>
            </div>
        );
    }
}

export default SocialBlock;
