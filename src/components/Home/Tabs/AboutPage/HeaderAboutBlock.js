import React, { Component } from 'react';
//External
import { Grid } from 'semantic-ui-react';

class HeaderAboutBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
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
        );
    }
}

export default HeaderAboutBlock;
