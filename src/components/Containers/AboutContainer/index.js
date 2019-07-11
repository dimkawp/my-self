import React, { Component } from 'react'
// Style
import '../../../assets/scss/Containers/AboutContainer/about.css'
// Components
import Header from '../../Elements/Header'
import Container from '../../Elements/Container'
import AboutPage from '../../Pages/AboutPage/index'

export class AboutContainer extends Component {
	render() {
		return (
			<React.Fragment>
				<Header />
				<Container page={<AboutPage/>}/>
			</React.Fragment>
		)
	}
}

export default AboutContainer
