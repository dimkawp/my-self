import React, { Component } from 'react';
import './AboutPage.css';
import InfiniteScroll from "react-infinite-scroll-component";
import imgWork1_0 from '../../../assets/imgMyProjects/work1.0.png';
import imgWork2_0 from '../../../assets/imgMyProjects/work2.0.png';
import imgWork3_0 from '../../../assets/imgMyProjects/work3.0.png';
import imgWork4_0 from '../../../assets/imgMyProjects/work4.0.png';
import imgWork5_0 from '../../../assets/imgMyProjects/work5.0.png';
import qwest from 'qwest';

const style = {
    height: 30,
    border: "1px solid green",
    margin: 6,
    padding: 8
};

class AboutPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [
                { id: 1, title: 'YTC',
                    links: [{git: 'url-git'},{heroku: 'url-heroku'},{youtube: 'url-youtube'}],
                    description:'about project info',
                    category: ['css','ruby','angular'],
                    img: imgWork1_0
                },
                { id: 2, title: 'Homework-13.0',
                    links: [{git: 'url-git'},{heroku: 'url-heroku'},{youtube: 'url-youtube'}],
                    description:'about project info',
                    category: ['css','react','jQuery'],
                    img: imgWork2_0
                },
                { id: 3, title: 'Homework-14.0',
                    links: [{git: 'url-git'},{heroku: 'url-heroku'},{youtube: 'url-youtube'}],
                    description:'about project info',
                    category: ['css','react','jQuery'],
                    img: imgWork3_0
                },
                { id: 4, title: 'Homework-1.0',
                    links: [{git: 'url-git'},{heroku: 'url-heroku'},{youtube: 'url-youtube'}],
                    description:'about project info',
                    category: ['css','jQuery'],
                    img: imgWork4_0
                },
                { id: 5, title: 'Homework-2.0',
                    links: [{git: 'url-git'},{heroku: 'url-heroku'},{youtube: 'url-youtube'}],
                    description:'about project info2',
                    category: ['css','jQuery'],
                    img: imgWork5_0
                },

            ],
        };
    }
    fetchMoreData = () => {
        // a fake async api call like which sends
        // 20 more records in 1.5 secs
        setTimeout(() => {
            this.setState({
                items: [
                    { id: 1, title: 'YTC',
                        links: [{git: 'url-git'},{heroku: 'url-heroku'},{youtube: 'url-youtube'}],
                        description:'about project info',
                        category: ['css','ruby','angular'],
                        img: imgWork1_0
                    },
                    { id: 2, title: 'Homework-13.0',
                        links: [{git: 'url-git'},{heroku: 'url-heroku'},{youtube: 'url-youtube'}],
                        description:'about project info',
                        category: ['css','react','jQuery'],
                        img: imgWork2_0
                    },
                    { id: 3, title: 'Homework-14.0',
                        links: [{git: 'url-git'},{heroku: 'url-heroku'},{youtube: 'url-youtube'}],
                        description:'about project info',
                        category: ['css','react','jQuery'],
                        img: imgWork3_0
                    },
                    { id: 4, title: 'Homework-1.0',
                        links: [{git: 'url-git'},{heroku: 'url-heroku'},{youtube: 'url-youtube'}],
                        description:'about project info',
                        category: ['css','jQuery'],
                        img: imgWork4_0
                    },
                    { id: 5, title: 'Homework-2.0',
                        links: [{git: 'url-git'},{heroku: 'url-heroku'},{youtube: 'url-youtube'}],
                        description:'about project info2',
                        category: ['css','jQuery'],
                        img: imgWork5_0
                    },
                    { id: 6, title: 'YTC',
                        links: [{git: 'url-git'},{heroku: 'url-heroku'},{youtube: 'url-youtube'}],
                        description:'about project info',
                        category: ['css','ruby','angular'],
                        img: imgWork1_0
                    },
                    { id: 7, title: 'Homework-13.0',
                        links: [{git: 'url-git'},{heroku: 'url-heroku'},{youtube: 'url-youtube'}],
                        description:'about project info',
                        category: ['css','react','jQuery'],
                        img: imgWork2_0
                    },
                    { id: 8, title: 'Homework-14.0',
                        links: [{git: 'url-git'},{heroku: 'url-heroku'},{youtube: 'url-youtube'}],
                        description:'about project info',
                        category: ['css','react','jQuery'],
                        img: imgWork3_0
                    },
                    { id: 9, title: 'Homework-1.0',
                        links: [{git: 'url-git'},{heroku: 'url-heroku'},{youtube: 'url-youtube'}],
                        description:'about project info',
                        category: ['css','jQuery'],
                        img: imgWork4_0
                    },
                    { id: 10, title: 'Homework-2.0',
                        links: [{git: 'url-git'},{heroku: 'url-heroku'},{youtube: 'url-youtube'}],
                        description:'about project info2',
                        category: ['css','jQuery'],
                        img: imgWork5_0
                    },


                ],
            });
        }, 1500);
    };


    render() {
        return (
            <div className="AboutPage">
                <InfiniteScroll
                    dataLength={this.state.items.length}
                    next={this.fetchMoreData}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}
                >
                    {this.state.items.map((i, index) => (
                        <div style={style} key={index}>
                            div - #{i.title}
                        </div>
                    ))}
                </InfiniteScroll>

            </div>
        );
    }
}

export default AboutPage;
