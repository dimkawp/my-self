import React, { Component } from 'react';
import './DemoPage.css';
import { Animated } from "react-animated-css";
import { Button, Modal } from 'semantic-ui-react';

class DemoPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [
                { id: 1, title: 'YTC',
                  links: [{git: 'url-git'},{heroku: 'url-heroku'},{youtube: 'url-youtube'}],
                  description:'about project info',
                  category: ['css','ruby','angular']
                },
                { id: 2, title: 'Homework-13.0',
                  links: [{git: 'url-git'},{heroku: 'url-heroku'},{youtube: 'url-youtube'}],
                  description:'about project info',
                  category: ['css','react','jQuery']
                },
                { id: 3, title: 'Homework-14.0',
                  links: [{git: 'url-git'},{heroku: 'url-heroku'},{youtube: 'url-youtube'}],
                  description:'about project info',
                  category: ['css','react','jQuery']
                },
                { id: 4, title: 'Homework-1.0',
                    links: [{git: 'url-git'},{heroku: 'url-heroku'},{youtube: 'url-youtube'}],
                    description:'about project info',
                    category: ['css','jQuery']
                },
                { id: 5, title: 'Homework-2.0',
                    links: [{git: 'url-git'},{heroku: 'url-heroku'},{youtube: 'url-youtube'}],
                    description:'about project info2',
                    category: ['css','jQuery']
                },

            ],
            workArray: []
        }
    }
    componentWillMount(){
        this.state.workArray = this.state.array;

    }

    //BUTTON ADD Project
    addProjectEvent = () => {
        console.log('add');
    }
    categoryAll = () => {
        let data = this.state.array.filter(function(item){
            return item;
        }).map(function({id, title, links, description, category}){
            return {id, title, links, description, category};
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
            <Animated animationIn="bounceInLeft" animationOut="fadeOut" animationInDelay={500} isVisible={true}>
                <div className="DemoPage">
                    <div className="category">
                        <Button onClick={this.categoryAll}>all</Button>
                        <Button onClick={this.categoryRuby}>Ruby</Button>
                        <Button onClick={this.categoryCss}>Css</Button>
                        <Button onClick={this.categoryAngular}>Angular</Button>
                        <Button onClick={this.categoryReact}>React</Button>
                        <Button onClick={this.categoryjQuery}>jQuery</Button>
                    </div>
                    <div className="items">
                        {
                            this.state.workArray.map((item) => {
                                return (
                                    <div key={item.id} className="item">
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
                                            trigger={<Button>Show Modal</Button>}
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
                </div>
            </Animated>
        );
    }
}

export default DemoPage;
