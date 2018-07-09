import React, { Component } from 'react';
//Css
import './DemoPage.css';
//External
import uniqueId from 'lodash/uniqueId';
import { Animated } from "react-animated-css";
import { Button, Modal, Header, Embed } from 'semantic-ui-react';
//demo img
import imgWork1_0 from '../../../assets/imgMyProjects/work1.0.png';
import imgWork1_1 from '../../../assets/imgMyProjects/work1.1.png';
import imgWork1_2 from '../../../assets/imgMyProjects/work1.2.png';
import imgWork1_3 from '../../../assets/imgMyProjects/work1.3.png';
import imgWork2_0 from '../../../assets/imgMyProjects/work2.0.png';
import imgWork2_1 from '../../../assets/imgMyProjects/work2.1.png';
import imgWork2_2 from '../../../assets/imgMyProjects/work2.2.png';
import imgWork2_3 from '../../../assets/imgMyProjects/work2.3.png';
import imgWork3_0 from '../../../assets/imgMyProjects/work3.0.png';
import imgWork3_1 from '../../../assets/imgMyProjects/work3.1.png';
import imgWork3_2 from '../../../assets/imgMyProjects/work3.2.png';
import imgWork3_3 from '../../../assets/imgMyProjects/work3.3.png';
import imgWork4_0 from '../../../assets/imgMyProjects/work4.0.png';
import imgWork4_1 from '../../../assets/imgMyProjects/work4.1.png';
import imgWork4_2 from '../../../assets/imgMyProjects/work4.2.png';
import imgWork4_3 from '../../../assets/imgMyProjects/work4.3.png';
import imgWork5_0 from '../../../assets/imgMyProjects/work5.0.png';
import imgWork5_1 from '../../../assets/imgMyProjects/work5.1.png';
import imgWork5_2 from '../../../assets/imgMyProjects/work5.2.png';
import imgWork5_3 from '../../../assets/imgMyProjects/work5.3.png';
import imgWork5_4 from '../../../assets/imgMyProjects/work5.4.png';
import imgWork5_5 from '../../../assets/imgMyProjects/work5.4.png';
import imgWork5_6 from '../../../assets/imgMyProjects/work5.4.png';
import imgWork5_7 from '../../../assets/imgMyProjects/work5.4.png';
import imgWork6_0 from '../../../assets/imgMyProjects/work6.0.png';
import imgWork6_1 from '../../../assets/imgMyProjects/work6.1.png';
import imgWork6_2 from '../../../assets/imgMyProjects/work6.2.png';
import imgWork6_3 from '../../../assets/imgMyProjects/work6.3.png';
import imgWork6_4 from '../../../assets/imgMyProjects/work6.4.png';
import imgWork7_0 from '../../../assets/imgMyProjects/work7.0.png';
import imgWork7_1 from '../../../assets/imgMyProjects/work7.1.png';
import imgWork7_2 from '../../../assets/imgMyProjects/work7.2.png';
import imgWork7_3 from '../../../assets/imgMyProjects/work7.3.png';
import imgWork8_0 from '../../../assets/imgMyProjects/work8.0.png';
import imgWork8_1 from '../../../assets/imgMyProjects/work8.1.png';
import imgWork9_0 from '../../../assets/imgMyProjects/work9.0.png';
import imgWork9_1 from '../../../assets/imgMyProjects/work9.1.png';
import imgWork9_2 from '../../../assets/imgMyProjects/work9.2.png';

//Bootstrap components
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators } from 'reactstrap';
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
                { id: 2, title: 'TAJAM', prevTitle: 'Default layout html,css not adaptive.',
                    links: ['https://github.com/dimkawp/geekhub-frontend-js/blob/master/tasks/homework-5.0/home.html', 'https://geekhub-frontend-js.herokuapp.com/tasks/homework-5.0/home.html', false],
                    description:'Default layout use only css html. Not adaptive fore mobile, have default size.',
                    category: ['css'],
                    img: imgWork2_0,
                    demoImg: [imgWork2_0,imgWork2_1,imgWork2_2,imgWork2_3]
                },
                { id: 3, title: 'AMBER', prevTitle: 'Middle level layout html,css with adaptive.',
                    links: ['https://github.com/dimkawp/geekhub-frontend-js/blob/master/tasks/homework-7.0/home.html', 'https://geekhub-frontend-js.herokuapp.com/tasks/homework-7.0/home.html', false],
                    description:'Middle level layout use only css html. Adaptive fore mobile.',
                    category: ['css'],
                    img: imgWork3_0,
                    demoImg: [imgWork3_0,imgWork3_1,imgWork3_2,imgWork3_3]
                },
                { id: 4, title: 'WITHE', prevTitle: 'Middle level layout html,css with adaptive.',
                    links: ['https://github.com/dimkawp/geekhub-frontend-js/blob/master/tasks/homework-9.0/home.html', 'https://geekhub-frontend-js.herokuapp.com/tasks/homework-9.0/home.html', false],
                    description:'Middle level layout use css html and js. Adaptive fore mobile. And used js and JQ fore, Mobile Nav, Nav anchor, nav scroll and slider with change screen, change slider size.',
                    category: ['css'],
                    img: imgWork4_0,
                    demoImg: [imgWork4_0,imgWork4_1,imgWork4_2,imgWork4_3]
                },
                { id: 5, title: 'ONSULT PULS', prevTitle: 'Middle level layout html,css,jQuery with adaptive.',
                    links: ['https://github.com/dimkawp/geekhub-frontend-js/blob/master/tasks/homework-11.0/home.html', 'https://geekhub-frontend-js.herokuapp.com/tasks/homework-11.0/home.html', false],
                    description:'Middle level layout use css html js jQuery. Adaptive fore mobile. Have more page, more sliders, changes bg when scroll. Used node modules, gulp,sass. Build all mini js css html.',
                    category: ['css','jQuery'],
                    img: imgWork5_0,
                    demoImg: [imgWork5_0,imgWork5_1,imgWork5_2,imgWork5_3,imgWork5_4,imgWork5_5,imgWork5_6,imgWork5_7]
                },
                { id: 6, title: 'MERKURY', prevTitle: 'Full work on React.',
                    links: ['https://github.com/dimkawp/geekhub-frontend-js/tree/master/tasks/homework-13.0/homework', 'https://gh-homework-13.herokuapp.com', false],
                    description:'This full work on React, with routs. Have api login local storage. Have more graphics charsets and sortable box. React-big-calendar. use JQ fore dropbox and search box. Adaptive fore small screen and mobile.',
                    category: ['css','jQuery','react'],
                    img: imgWork6_0,
                    demoImg: [imgWork6_0,imgWork6_1,imgWork6_2,imgWork6_3,imgWork6_4]
                },
                { id: 7, title: 'VIRTUS', prevTitle: 'Full work on React.',
                    links: ['https://github.com/dimkawp/geekhub-frontend-js/tree/master/tasks/homework-14.0/homework', 'https://gh-homework-14.herokuapp.com', false],
                    description:'This full work on React, with routs. Login local storage. Have more graphics charsets and sortable box. React-bootstrap-table-next. Use Redux. Adaptive fore small screen and mobile.',
                    category: ['css','jQuery','react'],
                    img: imgWork7_0,
                    demoImg: [imgWork7_0,imgWork7_1,imgWork7_2,imgWork7_3]
                },
                { id: 8, title: 'YTC', prevTitle: 'The project of learning ruby 2.4.0.',
                    links: ['https://github.com/dimkawp/YTC', 'https://ytcproject.herokuapp.com/', '_q6exCpCqKU'],
                    description:'The main goal was to create a resource for fast processing of video from YouTube.\n' +
                    'The process is as follows. On this link our API downloads the video from the YouTube, then for processing (in our case, cutting out the piece), there is loading on the Api Cloudinary. After processing, a download is made to the channel, access to which was obtained at login.\n',
                    category: ['css','ruby','angular'],
                    img: imgWork8_0,
                    demoImg: [imgWork8_0,imgWork8_1,imgWork8_0,imgWork8_1]
                },
                { id: 9, title: 'WOK', prevTitle: 'ReactJS',
                    links: ['https://github.com/dimkawp/work-wok', 'https://world-of-keg.herokuapp.com/', false],
                    description:'My old project rebuild on React',
                    category: ['css','jQuery','react'],
                    img: imgWork9_0,
                    demoImg: [imgWork9_0,imgWork9_1,imgWork9_2,imgWork9_1]
                },

            ],
            workArray: [],
            scrolled: false,
            arrayCountShow: 9,
            SliderBlock: false,
            TrigerSliderStatus: 'Open'

        }
    }
    componentWillMount(){
        this.state.workArray = this.state.array;
        window.onscroll = () => this.handleScroll();
    }
    //Carousel
    onExiting = () => {
        this.animating = true;
    }

    onExited = () => {
        this.animating = false;
    }

    next = () => {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 3 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous = () => {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? 3 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex = (newIndex) => {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }

    //ADD Projects when scroll
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

    //Category filters
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

    TrigerSliderBlock = () => {
        this.setState({SliderBlock: !this.state.SliderBlock});
        if (this.state.SliderBlock === true) {
            this.state.TrigerSliderStatus = 'Open'
        } else {
            this.state.TrigerSliderStatus = 'Close'
        }
    }

    render() {
        const { activeIndex } = this.state;
        return (
                <div className="demoPage" onScroll={this.handleScroll}>
                    <Animated animationIn="bounceInLeft" animationOut="fadeOut" animationInDelay={500} isVisible={true}>
                    <div className="categoryButtons">
                        <button className="categoryButton" onClick={this.categoryAll}>all</button>
                        <button className="categoryButton" onClick={this.categoryRuby}>Ruby</button>
                        <button className="categoryButton" onClick={this.categoryCss}>Css</button>
                        <button className="categoryButton" onClick={this.categoryAngular}>Angular</button>
                        <button className="categoryButton" onClick={this.categoryReact}>React</button>
                        <button className="categoryButton" onClick={this.categoryjQuery}>jQuery</button>
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
                                            trigger={<Button basic color='blue' className="triggerModal">Show</Button>}
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
                                                                <div className="TrigerSliderBlock">
                                                                    <button onClick={this.TrigerSliderBlock}>{this.state.TrigerSliderStatus} Slider</button>
                                                                </div>
                                                                {
                                                                    this.state.SliderBlock === true &&
                                                                    <Carousel
                                                                        activeIndex={activeIndex}
                                                                        next={this.next}
                                                                        previous={this.previous}
                                                                    >
                                                                        <CarouselIndicators items={item.demoImg} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                                                                        {
                                                                            item.demoImg.map((img, key) => {
                                                                                return (
                                                                                    <CarouselItem
                                                                                        key={uniqueId()}
                                                                                        onExiting={this.onExiting}
                                                                                        onExited={this.onExited}
                                                                                    >
                                                                                        <img key={uniqueId()} src={img} alt="slider img" style={{width: '100%'}}/>
                                                                                    </CarouselItem>
                                                                                );
                                                                            })
                                                                        }
                                                                        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                                                                        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                                                                    </Carousel>
                                                                }
                                                            <div className="LinksBlock">
                                                                {
                                                                    item.links[2] !== false &&
                                                                    <a href={"https://www.youtube.com/watch?v="+item.links[2]} target="_blank">
                                                                        <span>Link on Video</span>
                                                                        <IconYouTube size={40}/>
                                                                    </a>
                                                                }
                                                                {
                                                                    item.links[0] !== false &&
                                                                    <a href={item.links[0]} target="_blank">
                                                                        <span>Link on GitHub</span>
                                                                        <IconGitHub size={40}/>
                                                                    </a>
                                                                }
                                                                {
                                                                    item.links[1] !== false &&
                                                                    <a href={item.links[1]} target="_blank">
                                                                        <span>Link on Demo</span>
                                                                        <IconHeroku size={40}/>
                                                                    </a>
                                                                }
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
