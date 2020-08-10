import { connect } from 'react-redux'
import SingleOrder from '../components/Order/SingleOrder'
const tim1DonHang = (order) => {
  return { type: 'TIM_DON_HANG',order:order }
}
const getProductCart = (arr) => {
  return { type: 'GET_SP_TRONG_CAR' ,arr:arr}
}
const mapDispatchToProps = dispatch => {
    return {
        tim1DonHang:(order)=>dispatch(tim1DonHang(order)),
        getProductCart:(arr)=>dispatch(getProductCart(arr))
    }
  }
export default connect(null, mapDispatchToProps)(SingleOrder)



