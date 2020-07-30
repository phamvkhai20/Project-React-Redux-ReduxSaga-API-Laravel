import { connect } from 'react-redux'
import ListProduct from '../components/Product/ListProduct'

const GetProduct = () => {
  return { type: 'LAY_TAT_CA_SAN_PHAM' }
}
const deleteProduct = (id,token) => {
  return { type: 'XOA_SAN_PHAM', id:id,token:token}
}
const mapDispatchToProps = dispatch => {
    return {
        GetProduct: () => dispatch(GetProduct()),
        deleteProduct:(id,token)=>dispatch(deleteProduct(id,token))
    }
  }
export default connect(null, mapDispatchToProps)(ListProduct)



