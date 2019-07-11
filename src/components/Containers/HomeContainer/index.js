import React, { Component } from 'react'
// Style
import '../../../assets/scss/Containers/HomeContainer/home.css'
// Components
import Header from '../../Elements/Header'
import Container from '../../Elements/Container'
import HomePage from '../../Pages/HomePage/index'

class HomeContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {
		return (
			<React.Fragment>
				<Header />
				<Container page={<HomePage />}/>
			</React.Fragment>
		);
	}
}

export default HomeContainer;
