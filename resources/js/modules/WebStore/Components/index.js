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
import CheckoutContainer from '../Containers/CheckoutContainer';
import OrderSuccsess from './Cart/OrderSuccsess';
import ContactContainer from '../Containers/ContactContainer';
const WebStore = ({GetCategory,LayTokenDangXuat}) => {
    const user = useSelector(state => state.auth.infoUser);
    return (
    <div className="site-wrap" style={{backgroundColor:"#fff"}}>
        <HeaderContainer/>
            <Switch>
            <Route exact path='/Store/' component={HomePage}/>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/Store/Checkout' component={CheckoutContainer}/>
            <Route exact path='/Store/Cart/' component={CarContainer}/>
            <Route exact path='/Store/Product/:id'  component={SingleProductContainer}/>
            <Route exact path='/Store/Category/:id'  component={ProductCategoryContainer}/>
            <Route path='/Store/Shop/'>
                 <ShopContainer />
            </Route>
            <Route  exact path='/Store/OrderSuccess' component={OrderSuccsess} />
            <Route  exact path='/Store/Contact' component={ContactContainer} />
            </Switch>
        <Footer />
    </div>
    )
}

WebStore.propTypes = {

}

export default WebStore
