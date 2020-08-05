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
import HeaderContainer from '../Containers/HeaderContainer';
import ListProductContainer from '../Containers/ListProductContainer';
import { useSelector } from 'react-redux';
import EditProductContainer from '../Containers/EditProductContainer';
import AddProductContainer from '../Containers/AddProductContainer';
import ListCategoryContainer from '../Containers/ListCategoryContainer';
import AddCategoryContainer from '../Containers/AddCategoryContainer';
function Example() {
const isUpdate = useSelector(state => state.product.isUpdateProduct)
const isAddProduct = useSelector(state => state.product.isAddProduct)
    return (
        <div>
            <HeaderContainer />
            <Sidebar />
               <Route exact  path="/Admin/AddProduct">
                  {isAddProduct?  <Redirect to="/Admin/ListProduct"  />:  <AddProductContainer />}
               </Route>
               <Route exact path="/Admin/ListProduct"  component={ListProductContainer}/>
               <Route exact  path="/Admin/Product/:id">
                  { isUpdate ? <Redirect to="/Admin/ListProduct"  /> : <EditProductContainer /> }
                </Route>
               <Route exact  path="/Admin/AddCategory" component={AddCategoryContainer} />
               <Route exact path="/Admin/ListCategory"  component={ListCategoryContainer}/>
            <Footer />
        </div>
    );
}
export default Example;

