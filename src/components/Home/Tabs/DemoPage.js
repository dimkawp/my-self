import React, { Component } from 'react';
import './DemoPage.css';
import { Animated } from "react-animated-css";
import { Button, Modal } from 'semantic-ui-react';
import imgWork1_0 from '../../../assets/imgMyProjects/work1.0.png';
import imgWork2_0 from '../../../assets/imgMyProjects/work2.0.png';
import imgWork3_0 from '../../../assets/imgMyProjects/work3.0.png';
import imgWork4_0 from '../../../assets/imgMyProjects/work4.0.png';
import imgWork5_0 from '../../../assets/imgMyProjects/work5.0.png';

class DemoPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [
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

                { id: 11, title: 'YTC',
                    links: [{git: 'url-git'},{heroku: 'url-heroku'},{youtube: 'url-youtube'}],
                    description:'about project info',
                    category: ['css','ruby','angular'],
                    img: imgWork1_0
                },
                { id: 12, title: 'Homework-13.0',
                    links: [{git: 'url-git'},{heroku: 'url-heroku'},{youtube: 'url-youtube'}],
                    description:'about project info',
                    category: ['css','react','jQuery'],
                    img: imgWork2_0
                },
                { id: 13, title: 'Homework-14.0',
                    links: [{git: 'url-git'},{heroku: 'url-heroku'},{youtube: 'url-youtube'}],
                    description:'about project info',
                    category: ['css','react','jQuery'],
                    img: imgWork3_0
                },
                { id: 14, title: 'Homework-1.0',
                    links: [{git: 'url-git'},{heroku: 'url-heroku'},{youtube: 'url-youtube'}],
                    description:'about project info',
                    category: ['css','jQuery'],
                    img: imgWork4_0
                },
                { id: 15, title: 'Homework-2.0',
                    links: [{git: 'url-git'},{heroku: 'url-heroku'},{youtube: 'url-youtube'}],
                    description:'about project info2',
                    category: ['css','jQuery'],
                    img: imgWork5_0
                },
                { id: 16, title: 'YTC',
                    links: [{git: 'url-git'},{heroku: 'url-heroku'},{youtube: 'url-youtube'}],
                    description:'about project info',
                    category: ['css','ruby','angular'],
                    img: imgWork1_0
                },
                { id: 17, title: 'Homework-13.0',
                    links: [{git: 'url-git'},{heroku: 'url-heroku'},{youtube: 'url-youtube'}],
                    description:'about project info',
                    category: ['css','react','jQuery'],
                    img: imgWork2_0
                },
                { id: 18, title: 'Homework-14.0',
                    links: [{git: 'url-git'},{heroku: 'url-heroku'},{youtube: 'url-youtube'}],
                    description:'about project info',
                    category: ['css','react','jQuery'],
                    img: imgWork3_0
                },
                { id: 19, title: 'Homework-1.0',
                    links: [{git: 'url-git'},{heroku: 'url-heroku'},{youtube: 'url-youtube'}],
                    description:'about project info',
                    category: ['css','jQuery'],
                    img: imgWork4_0
                },
                { id: 20, title: 'Homework-2.0',
                    links: [{git: 'url-git'},{heroku: 'url-heroku'},{youtube: 'url-youtube'}],
                    description:'about project info2',
                    category: ['css','jQuery'],
                    img: imgWork5_0
                },

            ],
            workArray: [],
            scrolled: false,
            arrayCountShow: 9

        }
    }
    componentWillMount(){
        this.state.workArray = this.state.array;
        window.onscroll = () => this.handleScroll();

    }

    //BUTTON ADD Project
    addProjectEvent = () => {
        console.log('add');
    }
    handleScroll = () => {
        if (document.documentElement.scrollTop > 500 && document.documentElement.scrollTop < 600) {
            //setTimeout(() => {},500);
            this.setState({ arrayCountShow: 9 });
            console.log(document.documentElement.scrollTop);
            console.log('9');
        } else {

        }
        if (document.documentElement.scrollTop > 600 && document.documentElement.scrollTop < 700) {
            this.setState({ arrayCountShow: 12 });
            console.log(document.documentElement.scrollTop);
            console.log('12');
        } else {

        }
        if (document.documentElement.scrollTop > 700 && document.documentElement.scrollTop < 750) {
            this.setState({ arrayCountShow: 15 });
            console.log(document.documentElement.scrollTop);
            console.log('15');
        } else {

        }
        if (document.documentElement.scrollTop > 750 && document.documentElement.scrollTop < 800) {
            this.setState({ arrayCountShow: 18 });
            console.log(document.documentElement.scrollTop);
            console.log('18');
        } else {

        }
    }
    categoryAll = () => {
        let data = this.state.array.filter(function(item){
            return item;
        }).map(function({id, title, links, description, category, img}){
            return {id, title, links, description, category, img};
        });
        this.setState({
            workArray: data
        });
        console.log(data);
    }
    categoryRuby = () => {
        let data = this.state.array.filter(function(item){
            var found = item.category.find(function(element) {
                return element === 'ruby';
            });
            return found;
        });
        this.setState({
            workArray: data
        });
        console.log(data);
    }
    categoryCss = () => {
        let data = this.state.array.filter(function(item){
            var found = item.category.find(function(element) {
                return element === 'css';
            });
            return found;
        });
        this.setState({
            workArray: data
        });
        console.log(data);
    }
    categoryAngular = () => {
        let data = this.state.array.filter(function(item){
            var found = item.category.find(function(element) {
                return element === 'angular';
            });
            return found;
        });
        this.setState({
            workArray: data
        });
        console.log(data);
    }
    categoryReact = () => {
        let data = this.state.array.filter(function(item){
            var found = item.category.find(function(element) {
                return element === 'react';
            });
            return found;
        });
        this.setState({
            workArray: data
        });
        console.log(data);
    }
    categoryjQuery = () => {
        let data = this.state.array.filter(function(item){
            var found = item.category.find(function(element) {
                return element === 'jQuery';
            });
            return found;
        });
        this.setState({
            workArray: data
        });
        console.log(data);
    }
    render() {

        return (

                <div className="demoPage" onScroll={this.handleScroll} >
                    <Animated animationIn="bounceInLeft" animationOut="fadeOut" animationInDelay={500} isVisible={true}>
                    <div className="category">
                        <Button basic color='orange' onClick={this.categoryAll}>all</Button>
                        <Button basic color='orange' onClick={this.categoryRuby}>Ruby</Button>
                        <Button basic color='orange' onClick={this.categoryCss}>Css</Button>
                        <Button basic color='orange' onClick={this.categoryAngular}>Angular</Button>
                        <Button basic color='orange' onClick={this.categoryReact}>React</Button>
                        <Button basic color='orange' onClick={this.categoryjQuery}>jQuery</Button>
                    </div>
                    </Animated>
                    <Animated animationIn="bounceInLeft" animationOut="fadeOut" animationInDelay={1000} isVisible={true}>
                    <div className="items">
                        {
                            this.state.workArray.slice(0,this.state.arrayCountShow).map((item) => {
                                return (
                                    <div key={item.id} className="item">
                                        <img src={item.img} alt="" width="32%" height="250px"/>
                                        <div className="category">
                                            {
                                                item.category.map((category, index) => {
                                                    return (
                                                        <div key={index} className="list">
                                                            {category}
                                                        </div>
                                                    );
                                                })
                                            }
                                        </div>
                                        <div className="title">{item.title}</div>
                                        <div className="description">{item.description}</div>
                                        <Modal
                                            trigger={<Button basic color='orange' className="triggerModal">Show</Button>}
                                            header={item.title}
                                            content={item.description}
                                            actions={[
                                                'Snooze',
                                                { key: 'done', content: 'Done', positive: true },
                                            ]}
                                        />
                                    </div>
                                );
                            })
                        }
                    </div>
                    </Animated>
                </div>

        );
    }
}

export default DemoPage;
