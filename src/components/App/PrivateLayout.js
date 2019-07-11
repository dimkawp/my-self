import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateLayout = ({component: Component, ...rest}) => {
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
            <Redirect to="/admin" />
          );
        }
    }} />
  )
};

export default PrivateLayout;