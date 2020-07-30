import React from 'react'
import PropTypes from 'prop-types'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import LoginContainer from '../Containers/LoginContainer';
import RegisterContainer from '../Containers/RegisterContainer';
const RouteAuth = props => {
    return (
            <Switch>
               <Route exact  path="/Auth/Login" component={LoginContainer} />
               <Route exact path="/Auth/Register" component={RegisterContainer} />
           </Switch>
    )
}

export default RouteAuth
