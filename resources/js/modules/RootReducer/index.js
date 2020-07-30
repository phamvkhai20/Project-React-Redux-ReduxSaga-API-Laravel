import {combineReducers} from 'redux';
import AuthReducer from '../Auth/Reducers/AuthReducer';
import SetToken from '../Auth/Reducers/SetTokenReducer';
import ProductReducer from '../Admin/Reducers/ProductReducer';
const rootReducer  = combineReducers({
  auth:AuthReducer,
  token:SetToken,
  product:ProductReducer
})
export default rootReducer;