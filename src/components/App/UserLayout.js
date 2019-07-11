import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const UserLayout = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => {  
      // a > b
      let a = 10;
      let b = 5;
        if (a > b) {
          return (
            <Component {...matchProps} />                   
          );
        }
        else {
          return (
            <Redirect to="/" />
          );
        }
    }} />
  )
};

export default UserLayout;