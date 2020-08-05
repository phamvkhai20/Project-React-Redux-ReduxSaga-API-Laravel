import React, { useEffect, useState } from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import Example from '../modules/Admin/components/Example';
import RouteAuth from '../modules/Auth/Components';
import { useSelector, useDispatch } from "react-redux";
import WebStore from '../modules/WebStore/Components';
import { setTokenAction } from '../modules/Auth/Actions/setToken';
function Routes({ layThongTinUser ,GetProduct,GetCategory,LayTokenDangXuat}) {
    useEffect(() => {
        GetProduct(),
        GetCategory()
    }, [])
    const categories = useSelector(state => state.category.categories)

    const tokens = useSelector(state => state.token.tokens);
    const [infoUser, setinfoUser] = useState()
    const user = useSelector(state => state.auth.infoUser);
    const getUser = (tokens) => {
        tokens ? layThongTinUser(tokens) : ''
    }
    !user ? getUser(tokens) : ''
    const dangNhapThanhCong = useSelector(state => state.auth.isDangNhap);
    const dispatch = useDispatch();
    const isDangXuat = useSelector(state => state.auth.isDangXuat);
    dispatch(setTokenAction(localStorage.getItem('access_token')))
    return (
        <Router >
            <Switch>
                    <Route exact path="/" component={WebStore} />
                    <Route path="/Store/">
                         <WebStore />
                    </Route>
                    <Route path="/Admin/"  >
                    {!user ? !localStorage.getItem('access_token') || isDangXuat ? <Redirect to="/Auth/Login" /> : <Example /> :''}
                        {user?  (user.role == 1 || isDangXuat ? <Redirect to="/Auth/Login" /> :  <Example />   ) : ''}
                    </Route>
                <Route path="/Auth/" >
                    {tokens || dangNhapThanhCong ?  <Redirect to="/Store/" /> : <RouteAuth />}
                </Route>
            </Switch>
        </Router>
    );
}
export default Routes;

