import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './Layout/Sidebar';
import Footer from './Layout/Footer';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
import AddProduct from './Product/AddProduct';
import HeaderContainer from '../Containers/HeaderContainer';
import AddCategory from './Category/AddCategory';
import ListCategory from './Category/ListCategory';
import SingleCategory from './Category/SingleCategory';
import ListProductContainer from '../Containers/ListProductContainer';
import { useSelector } from 'react-redux';
import EditProductContainer from '../Containers/EditProductContainer';

function Example() {
const isUpdate = useSelector(state => state.product.isUpdateProduct)
    return (
        <div>
            <HeaderContainer />
            <Sidebar />
               <Route exact  path="/Admin/AddProduct" component={AddProduct} />
               <Route exact path="/Admin/ListProduct"  component={ListProductContainer}/>
               <Route exact  path="/Admin/Product/:id">
                  { isUpdate ? <Redirect to="/Admin/ListProduct"  /> : <EditProductContainer /> }
                </Route>
               <Route exact  path="/Admin/AddCategory" component={AddCategory} />
               <Route exact path="/Admin/ListCategory"  component={ListCategory}/>
               <Route exact  path="/Admin/Category/:id"  component={SingleCategory}/>
            <Footer />
        </div>
    );
}
export default Example;

