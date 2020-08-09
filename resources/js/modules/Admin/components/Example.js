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
import EditCategoryContainer from '../Containers/EditCategoryContainer';
import AddPostContainer from '../Containers/AddPostContainer';
import ListPostContainer from '../Containers/ListPostContainer';
import EditPostContainer from '../Containers/EditPostContainer';
import Dashboard from './Dashboard';
import DashboardContainer from '../Containers/DashboardContainer';
function Example() {
  const isUpdate = useSelector(state => state.product.isUpdateProduct)
  const isAddProduct = useSelector(state => state.product.isAddProduct)
  const isEditpost = useSelector(state => state.post.isEditpost)
  const isAddCate = useSelector(state => state.category.isAddCate)
  const isEditCategory = useSelector(state => state.category.isEditCategory)
  const isAddPost = useSelector(state => state.post.isAddPost)
  return (
    <div>
      <HeaderContainer />
      <Sidebar />
      <Route exact path="/Admin/">
        <DashboardContainer />
      </Route>
      <Route exact path="/Admin/AddProduct">
        {isAddProduct ? <Redirect to="/Admin/ListProduct" /> : <AddProductContainer />}
      </Route>
      <Route exact path="/Admin/ListProduct" component={ListProductContainer} />
      <Route exact path="/Admin/Product/:id">
        {isUpdate ? <Redirect to="/Admin/ListProduct" /> : <EditProductContainer />}
      </Route>
      <Route exact path="/Admin/ListCategory" component={ListCategoryContainer} />
      <Route exact path="/Admin/AddCategory">
        {isAddCate ? <Redirect to="/Admin/ListCategory" /> : <AddCategoryContainer />}
      </Route>
      <Route exact path="/Admin/Category/:id">
        {isEditCategory ? <Redirect to="/Admin/ListCategory" /> : <EditCategoryContainer />}
      </Route>
      <Route exact path="/Admin/ListPost" component={ListPostContainer} />
      <Route exact path="/Admin/AddPost">
        {isAddPost ? <Redirect to="/Admin/ListPost" /> : <AddPostContainer />}
      </Route>
      <Route exact path="/Admin/Post/:id" >
        {isEditpost ? <Redirect to="/Admin/ListPost" /> : <EditPostContainer />}
      </Route>
      <Footer />
    </div>
  );
}
export default Example;

