import React from 'react'
import PropTypes from 'prop-types'
import Header from './Layout/Header'
import Footer from './Layout/Footer'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import HomePage from './Home';
import { useSelector } from 'react-redux';
const WebStore = props => {
    const user = useSelector(state => state.auth.infoUser);
    return (
    <div className="site-wrap" style={{backgroundColor:"#fff"}}>
        <Header  />
            <Switch>
                <Route exact path='/' component={HomePage}/>
            </Switch>
        <Footer />
    </div>
    )
}

WebStore.propTypes = {

}

export default WebStore
