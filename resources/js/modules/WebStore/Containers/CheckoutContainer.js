

import { connect } from 'react-redux'
import Checkout from '../Components/Cart/Checkout'
const getProductCart = (arr) => {
  return { type: 'GET_SP_TRONG_CAR' ,arr:arr}
}
const addCart = (cart) => {
  return { type: 'DAT_HANG' ,cart:cart}
}
const mapDispatchToProps = dispatch => {
    return {
        getProductCart: (arr) => dispatch(getProductCart(arr)),
        addCart:(cart)=>dispatch(addCart(cart))
    }
}
export default connect(null, mapDispatchToProps)(Checkout)