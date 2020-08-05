import { connect } from 'react-redux'
import Routes from '../Routes/index'

const layThongTinUser = (token) => {
  return { type: 'GET_INFO_USER', token:token }
}
const GetProduct = () => {
  return { type: 'LAY_TAT_CA_SAN_PHAM' }
}
const GetCategory = () => {
  return { type: 'LAY_TAT_CA_DANH_MUC' }
}
const LayTokenDangXuat = (token) => {
    return { type: 'LAY_THONG_TIN_DANG_XUAT', token:token }
}
const mapDispatchToProps = dispatch => {
    return {
        layThongTinUser: (token) => dispatch(layThongTinUser(token)),
        GetProduct:()=>dispatch(GetProduct()),
        GetCategory: () => dispatch(GetCategory()),
        LayTokenDangXuat:(token) => dispatch(LayTokenDangXuat(token))
    }
  }
export default connect(null, mapDispatchToProps)(Routes)



