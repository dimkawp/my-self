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
    ReloadPage = () => {
        window.location.reload();
    }

    render() {
        return (
            <div className="contentTitle">
                <div id="secondMenu" className="items">
                    <div className="item" onClick={this.ReloadPage}>
                        <a href="" ><IconRepeat size={50}/></a>
                    </div>
                    <div className="item">
                        <a href="https://github.com/dimkawp" target="_blank"><IconGithub size={50}/></a>
                    </div>
                    <div className="item">
                        <a href=""><IconWindows size={50}/></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContentTitle;
