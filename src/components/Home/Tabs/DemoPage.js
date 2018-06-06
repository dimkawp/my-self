import React, { Component } from 'react';
import './DemoPage.css';
import { Animated } from "react-animated-css";
import { Button, Modal, Header, Embed } from 'semantic-ui-react';
import imgWork1_0 from '../../../assets/imgMyProjects/work1.0.png';
import imgWork1_1 from '../../../assets/imgMyProjects/work1.1.png';
import imgWork1_2 from '../../../assets/imgMyProjects/work1.2.png';
import imgWork1_3 from '../../../assets/imgMyProjects/work1.3.png';
import imgWork2_0 from '../../../assets/imgMyProjects/work2.0.png';
import imgWork2_1 from '../../../assets/imgMyProjects/work2.1.png';
import imgWork2_2 from '../../../assets/imgMyProjects/work2.2.png';
import imgWork2_3 from '../../../assets/imgMyProjects/work2.3.png';
import imgWork3_0 from '../../../assets/imgMyProjects/work3.0.png';
import imgWork4_0 from '../../../assets/imgMyProjects/work4.0.png';
import imgWork5_0 from '../../../assets/imgMyProjects/work5.0.png';
//bootsrapt components
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';
//icons
import IconGitHub from 'react-icons/lib/go/logo-github';
import IconYouTube from 'react-icons/lib/io/social-youtube';
import IconHeroku from 'react-icons/lib/go/arrow-right';

class DemoPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            array: [
                { id: 1, title: 'AION', prevTitle: 'Default layout html,css not adaptive.',
                    links: ['https://github.com/dimkawp/geekhub-frontend-js/blob/master/tasks/homework-2.0/home.html', 'https://geekhub-frontend-js.herokuapp.com/tasks/homework-2.0/home.html', false],
                    description:'Default layout use only css html. Not adaptive fore mobile, have default size.',
                    category: ['css'],
                    img: imgWork1_0,
                    demoImg: [imgWork1_0,imgWork1_1,imgWork1_2,imgWork1_3]
                },
                { id: 2, title: 'AION', prevTitle: 'Default layout html,css not adaptive.',
                    links: ['https://github.com/dimkawp/geekhub-frontend-js/blob/master/tasks/homework-2.0/home.html', 'https://geekhub-frontend-js.herokuapp.com/tasks/homework-2.0/home.html', false],
                    description:'Default layout use only css html. Not adaptive fore mobile, have default size.',
                    category: ['css'],
                    img: imgWork2_0,
                    demoImg: [imgWork2_0,imgWork2_1,imgWork2_2,imgWork2_3]
                },
                { id: 3, title: 'YTC', prevTitle: 'The project of learning ruby 2.4.0.',
                    links: ['https://github.com/dimkawp/YTC', 'https://ytcproject.herokuapp.com/', '_q6exCpCqKU'],
                    description:'The main goal was to create a resource for fast processing of video from YouTube.\n' +
                    'The process is as follows. On this link our API downloads the video from the YouTube, then for processing (in our case, cutting out the piece), there is loading on the Api Cloudinary. After processing, a download is made to the channel, access to which was obtained at login.\n',
                    category: ['css','ruby','angular'],
                    img: imgWork1_0,
                    demoImg: [imgWork1_0,imgWork1_1,imgWork1_2,imgWork1_3]
                },

            ],
            workArray: [],
            scrolled: false,
            arrayCountShow: 9

        }
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }
    componentWillMount(){
        this.state.workArray = this.state.array;
        window.onscroll = () => this.handleScroll();
    }
    //CAROSEL
    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 5 - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? 5 - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }


    //BUTTON ADD Project
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
        }).map(function({id, title, prevTitle, links, description, category, img, demoImg}){
            return {id, title, prevTitle, links, description, category, img, demoImg};
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
        const { activeIndex } = this.state;
        return (
                <div className="demoPage" onScroll={this.handleScroll}>
                    <Animated animationIn="bounceInLeft" animationOut="fadeOut" animationInDelay={500} isVisible={true}>
                    <div className="categoryButtons">
                        <button onClick={this.categoryAll}>all</button>
                        <button onClick={this.categoryRuby}>Ruby</button>
                        <button onClick={this.categoryCss}>Css</button>
                        <button onClick={this.categoryAngular}>Angular</button>
                        <button onClick={this.categoryReact}>React</button>
                        <button onClick={this.categoryjQuery}>jQuery</button>
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
                                        <div className="description">{item.prevTitle}</div>
                                        <Modal
                                            trigger={<Button basic color='orange' className="triggerModal">Show</Button>}
                                            header={item.title}
                                            content={
                                                    <Modal.Content>
                                                        <Modal.Description>
                                                            <Animated animationIn="bounceInDown" animationOut="fadeOut" animationInDelay={500} isVisible={true}>
                                                            <Header>About Project</Header>
                                                            <p>{item.description}</p>
                                                            </Animated>
                                                            <Animated animationIn="bounceInRight" animationOut="fadeOut" animationInDelay={750} isVisible={true}>
                                                            <div className="VideoBlock">
                                                                {
                                                                    item.links[2] !== false &&
                                                                    <Embed id='_q6exCpCqKU' source='youtube' />
                                                                }
                                                            </div>
                                                            </Animated>
                                                            <Animated animationIn="bounceInLeft" animationOut="fadeOut" animationInDelay={1000} isVisible={true}>
                                                            <div className="LinksBlock">
                                                                {
                                                                    item.links[2] !== false &&
                                                                    <a href={"https://www.youtube.com/watch?v="+item.links[2]} target="_blank">
                                                                        <IconYouTube size={30}/>
                                                                    </a>
                                                                }
                                                                {
                                                                    item.links[0] !== false &&
                                                                    <a href={item.links[0]} target="_blank">
                                                                        <IconGitHub size={30}/>
                                                                    </a>
                                                                }
                                                                {
                                                                    item.links[1] !== false &&
                                                                    <a href={item.links[1]} target="_blank">
                                                                        <IconHeroku size={30}/>
                                                                    </a>
                                                                }
                                                            </div>
                                                                <div>

                                                                    <Carousel
                                                                        activeIndex={activeIndex}
                                                                        next={this.next}
                                                                        previous={this.previous}
                                                                    >
                                                                        <CarouselIndicators items={item.demoImg} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                                                                        {
                                                                            item.demoImg.map((img) => {
                                                                                return (
                                                                                    <CarouselItem
                                                                                        key="item-key"
                                                                                        onExiting={this.onExiting}
                                                                                        onExited={this.onExited}
                                                                                    >
                                                                                        <img src={img} alt="slider img" style={{width: '100%'}}/>
                                                                                    </CarouselItem>
                                                                                );
                                                                            })
                                                                        }
                                                                        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                                                                        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                                                                    </Carousel>
                                                                </div>
                                                            </Animated>
                                                        </Modal.Description>
                                                    </Modal.Content>
                                            }

                                            actions={[
                                                { key: 'done', content: 'X', positive: true },
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
