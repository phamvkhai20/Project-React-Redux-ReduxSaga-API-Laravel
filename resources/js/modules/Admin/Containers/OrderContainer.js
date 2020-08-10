import { connect } from 'react-redux'
import ListOrder from '../components/Order'
const getOders = () => {
  return { type: 'LAY_TAT_CA_DON_HANG' }
}
const mapDispatchToProps = dispatch => {
    return {
        getOders:()=>dispatch(getOders()),
    }
  }
export default connect(null, mapDispatchToProps)(ListOrder)



