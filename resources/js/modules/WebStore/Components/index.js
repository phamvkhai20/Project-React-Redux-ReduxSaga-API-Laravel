import React from 'react'
import PropTypes from 'prop-types'
import Footer from './Layout/Footer'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import HomePage from './Home';
import { useSelector } from 'react-redux';
import SingleProductContainer from '../Containers/SingleProductContainer';
import HeaderContainer from '../Containers/HeaderContainer';
import ShopContainer from '../Containers/ShopContainer';
import CarContainer from '../Containers/CarContainer';
import ProductCategoryContainer from '../Containers/ProductCategoryContainer';
import Checkout from './Cart/Checkout';
const WebStore = ({GetCategory,LayTokenDangXuat}) => {
    const user = useSelector(state => state.auth.infoUser);
    return (
    <div className="site-wrap" style={{backgroundColor:"#fff"}}>
        <HeaderContainer/>
            <Switch>
            <Route exact path='/Store/' component={HomePage}/>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/Store/Checkout' component={Checkout}/>
            <Route exact path='/Store/Cart/' component={CarContainer}/>
            <Route exact path='/Store/Product/:id'  component={SingleProductContainer}/>
            <Route exact path='/Store/Category/:id'  component={ProductCategoryContainer}/>
            <Route path='/Store/Shop/'>
                 <ShopContainer />
            </Route>
            {/* <Route exact path='/Store/category/:id' component={CarContainer}/> */}
            </Switch>
        <Footer />
    </div>
    )
}

WebStore.propTypes = {

}

export default WebStore
