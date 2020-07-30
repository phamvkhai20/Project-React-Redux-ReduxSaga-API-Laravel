import { connect } from 'react-redux'
import Routes from '../Routes/index'

const layThongTinUser = (token) => {
  return { type: 'GET_INFO_USER', token:token }
}
const GetProduct = () => {
  return { type: 'LAY_TAT_CA_SAN_PHAM' }
}
const mapDispatchToProps = dispatch => {
    return {
        layThongTinUser: (token) => dispatch(layThongTinUser(token)),
        GetProduct:()=>dispatch(GetProduct())
    }
  }
export default connect(null, mapDispatchToProps)(Routes)



