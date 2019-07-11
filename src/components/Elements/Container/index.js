import React, { Component } from 'react'

export class Container extends Component {
  constructor(props) {
    super(props)
    this.state = { 
    }
  }
  
  render() {
    return (
      <React.Fragment>
        {this.props.page}
      </React.Fragment>  
    )
  }
}

export default Container
