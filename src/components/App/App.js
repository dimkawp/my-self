import React, { Component } from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import PrivateLayout from './PrivateLayout'
import UserLayout from './UserLayout'
//components
import AdminContainer from '../Containers/AdminContainer/index'
import HomeContainer from '../Containers/HomeContainer/index'
import AboutContainer from '../Containers/AboutContainer/index'

class App extends Component {
  render() {
    return (
    <Router exact path='/' component={HomeContainer}>
      <Switch>
        <PrivateLayout exact path="/admin" component={AdminContainer}/>
        <UserLayout path="/about" component={AboutContainer}/> 
        <UserLayout path="/home" component={HomeContainer}/>    
        <UserLayout path="/" component={HomeContainer}/>
      </Switch>
    </Router>
    );
  }
}

export default App;
