import React, { Component, lazy, Suspense } from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import PrivateLayout from './PrivateLayout'
import UserLayout from './UserLayout'
// Components
// Lazy load
const AdminContainer = lazy(() => import('../Containers/AdminContainer/index'));
const HomeContainer = lazy(() => import('../Containers/HomeContainer/index'));
const AboutContainer = lazy(() => import('../Containers/AboutContainer/index'));

class App extends Component {
  render() {
    return (
    <Router exact path='/' component={HomeContainer}>
      <Switch>
        <PrivateLayout exact path="/admin" component={WaitingComponent(AdminContainer)}/>
        <UserLayout path="/about" component={WaitingComponent(AboutContainer)}/> 
        <UserLayout path="/home" component={WaitingComponent(HomeContainer)}/>    
        <UserLayout path="/" component={WaitingComponent(HomeContainer)}/>
      </Switch>
    </Router>
    );
  }
}

function WaitingComponent(Component) {
  return props => (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </Suspense>
  );
}

export default App;
