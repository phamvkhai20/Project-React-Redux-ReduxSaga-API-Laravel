import { connect } from 'react-redux'
import ProductAll from '../Components/Product/ProductAll'

const GetProduct = () => {
  return { type: 'LAY_TAT_CA_SAN_PHAM' }
}
const GetCategory = () => {
  return { type: 'LAY_TAT_CA_DANH_MUC' }
}
const mapDispatchToProps = dispatch => {
    return {
        GetProduct: () => dispatch(GetProduct()),
        GetCategory:()=>dispatch(GetCategory())
    }
  }
export default connect(null, mapDispatchToProps)(ProductAll)