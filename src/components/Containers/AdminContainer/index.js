import React, { Component } from 'react'
// Components
import Header from '../../Elements/Header'
import Container from '../../Elements/Container'
import AdminPage from '../../Pages/AdminPage/index'

export class AdminContainer extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
  render() {
    return (
      <React.Fragment>
        <Header />
        <Container page={<AdminPage />}/>
      </React.Fragment>
    )
  }
}

export default AdminContainer
