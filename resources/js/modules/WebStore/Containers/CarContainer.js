

import { connect } from 'react-redux'
import Cart from '../Components/Cart/Cart'
const getProductCart = (arr) => {
  return { type: 'GET_SP_TRONG_CAR' ,arr:arr}
}
const mapDispatchToProps = dispatch => {
    return {
        getProductCart: (arr) => dispatch(getProductCart(arr)),
    }
}
export default connect(null, mapDispatchToProps)(Cart)