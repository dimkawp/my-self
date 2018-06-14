import React, { Component } from 'react';
//icons
import IconRepeat from 'react-icons/lib/fa/repeat'
import IconGithub from 'react-icons/lib/fa/github'
import IconWindows from 'react-icons/lib/fa/windows'

class ContentTitle extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className="contentTitle">
                <div id="secondMenu" className="items">
                    <div className="item"><IconRepeat size={50}/></div>
                    <div className="item"><IconGithub size={50}/></div>
                    <div className="item"><IconWindows size={50}/></div>
                </div>
            </div>
        );
    }
}

export default ContentTitle;
