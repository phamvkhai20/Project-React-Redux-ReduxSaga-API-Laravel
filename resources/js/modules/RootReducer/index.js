import {combineReducers} from 'redux';
import AuthReducer from '../Auth/Reducers/AuthReducer';
import SetToken from '../Auth/Reducers/SetTokenReducer';
import ProductReducer from '../Admin/Reducers/ProductReducer';
import CategoryReducer from '../Admin/Reducers/CategoryReducer';
import CartReducer from '../WebStore/Reducers/CartReducer';
const rootReducer  = combineReducers({
  auth:AuthReducer,
  token:SetToken,
  product:ProductReducer,
  category:CategoryReducer,
  cart:CartReducer,
})
export default rootReducer;