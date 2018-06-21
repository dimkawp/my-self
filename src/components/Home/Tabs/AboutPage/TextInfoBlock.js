import React, { Component } from 'react';
//External
import { Animated } from "react-animated-css";
import { Grid } from 'semantic-ui-react';

class TextInfoBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            classNameTest: true
        }
    }
//change classNameTest when change window size
//just example with out #react-responsive-decorator
    componentDidMount() {
        window.addEventListener('resize', () => {
            this.setState({
                classNameTest: window.innerWidth < 600
            });
        }, false);
    }

    render() {
        return (
            <div className="TextInfoBlock">
                <Animated animationIn='bounceInLeft' animationOut="fadeOut" animationInDelay={1500} isVisible={true}>
                    <Grid centered>
                        <p>If y have question or maybe you wanted write me, <br/> just fill this form and click submit, <br/> and this message goin to my email.</p>
                    </Grid>
                </Animated>
            </div>
        );
    }
}

export default TextInfoBlock;
