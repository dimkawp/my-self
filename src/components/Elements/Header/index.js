import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Header extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
  render() {
    return (
      <div className='nav-header'>
        <Link to="/">Main</Link>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/admin">Admin</Link>
      </div>
    )
  }
}

export default Header
