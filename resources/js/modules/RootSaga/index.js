import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../RootReducer";
import Login from "../Auth/Api/LoginSaga";
import { all } from "redux-saga/effects";
import Register from "../Auth/Api/RegisterSaga";
import Logout from "../Auth/Api/LogoutSaga";
import getUser from "../Auth/Api/GetUserSaga";
import { getProduct, DeleteProduct, EditProduct } from "../Admin/Api/ProductSaga";

function* rootsaga(){
    yield all([
        Login(),
        Register(),
        Logout(),
        getUser(),
        getProduct(),
        DeleteProduct(),
        EditProduct()
    ])
}
const sagaMiddleware = createSagaMiddleware();
export  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootsaga);


