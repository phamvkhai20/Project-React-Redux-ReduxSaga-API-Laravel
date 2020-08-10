import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../RootReducer";
import Login from "../Auth/Api/LoginSaga";
import { all } from "redux-saga/effects";
import Register from "../Auth/Api/RegisterSaga";
import Logout from "../Auth/Api/LogoutSaga";
import getUser from "../Auth/Api/GetUserSaga";
import { getProduct, DeleteProduct, EditProduct, AddProduct, SingleProduct, getProductCart, getProductCategory, xoaListSP } from "../Admin/Api/ProductSaga";
import { getCategories, AddCategory, DeleteCategory, EditCategory, tim1DanhMuc } from "../Admin/Api/CategorySaga";
import {DatHang, getOrders} from "../WebStore/Api/CatSaga";
import { getPosts, Addpost, Editpost, Deletepost, tim1BaiViet } from "../Admin/Api/PostSaga";
import {getListOrders, tim1DonHang} from "../Admin/Api/OrderSaga";
import { guiContact, getContacts } from "../WebStore/Api/ContactSaga";
function* rootsaga(){
    yield all([
        Login(),
        Register(),
        Logout(),
        getUser(),
        getProduct(),
        DeleteProduct(),
        EditProduct(),
        getCategories(),
        AddProduct(),
        SingleProduct(),
        getProductCart(),
        AddCategory(),
        DeleteCategory(),
        EditCategory(),
        getProductCategory(),
        DatHang(),
        tim1DanhMuc(),
        getPosts(),
        Addpost(),
        Editpost(),
        Deletepost(),
        tim1BaiViet(),
        guiContact(),
        getContacts(),
        getOrders(),
        getListOrders(),
        tim1DonHang(),
        xoaListSP()
    ])
}
const sagaMiddleware = createSagaMiddleware();
export  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootsaga);


