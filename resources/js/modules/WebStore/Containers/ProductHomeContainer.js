import { connect } from 'react-redux'
import ProductHome from '../Components/Product/ProductHome'

const GetProduct = () => {
  return { type: 'LAY_TAT_CA_SAN_PHAM' }
}
const mapDispatchToProps = dispatch => {
    return {
        GetProduct: () => dispatch(GetProduct()),
    }
  }
export default connect(null, mapDispatchToProps)(ProductHome)