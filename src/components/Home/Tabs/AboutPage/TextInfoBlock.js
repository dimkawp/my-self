import React, { Component } from 'react';
//External
import { Animated } from "react-animated-css";
import { Grid } from 'semantic-ui-react';

class TextInfoBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (

                <div className="TextInfoBlock">
                    <Animated animationIn="bounceInRight" animationOut="fadeOut" animationInDelay={1500} isVisible={true}>
                        <Grid centered>
                            <p>

                            </p>
                        </Grid>
                    </Animated>
                </div>

        );
    }
}

export default TextInfoBlock;
