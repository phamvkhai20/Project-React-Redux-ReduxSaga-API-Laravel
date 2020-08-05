import { connect } from 'react-redux'
import SingleProduct from '../Components/Product/SingleProduct'

const GetProduct = () => {
  return { type: 'LAY_TAT_CA_SAN_PHAM' }
}
const getSingleProduct = (product) => {
  return { type: 'CHI_TIET_SAN_PHAM',product }
}


const mapDispatchToProps = dispatch => {
    return {
        GetProduct: () => dispatch(GetProduct()),
        getSingleProduct:(product)=>dispatch(getSingleProduct(product))
    }
  }
export default connect(null, mapDispatchToProps)(SingleProduct)



