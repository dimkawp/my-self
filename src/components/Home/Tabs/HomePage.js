import React, { Component } from 'react';
import TitleContainerInfo from "./HomePage/TitleContainerInfo";
import Posts from './HomePage/Post'
//Css
import './HomePage.css';
import BgOne from '../../../assets/Home/bg-one.jpg';
//External
import $ from 'jquery';
import { Animated } from "react-animated-css";
import { Parallax, Background } from 'react-parallax';

class HomePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showBanner: false,
			items: [
				{id: 1, title: 'Title 1', description: 'description'},
				{id: 2, title: 'Title 2', description: 'description'},
				{id: 3, title: 'Title 3', description: 'description'},
				{id: 4, title: 'Title 4', description: 'description'},
				{id: 5, title: 'Title 5', description: 'description'}
			],
			posts: [
				{id: 1, title: 'Title 1 POST', description: 'description'},
				{id: 2, title: 'Title 1 POST', description: 'description'},
				{id: 3, title: 'Title 1 POST', description: 'description'},
				{id: 4, title: 'Title 1 POST', description: 'description'},
				{id: 5, title: 'Title 1 POST', description: 'description'}
			]
		}
	}
	//JQ
	componentDidMount() {
		//$(window).scroll(function() {
		//    if ($(this).scrollTop()>750) {

		//    }
		//});
	}

	render() {
		return (
			<Animated animationIn="flash" animationOut="fadeOut" animationInDelay={1600} isVisible={true}>
				<div className="HomePage">
					<TitleContainerInfo items={this.state.items} />
					<Posts posts={this.state.posts}/>
					<div className="footer footer-home-page">footer</div>
				</div>
			</Animated>
		);
	}
}

export default HomePage;
