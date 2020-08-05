import { connect } from 'react-redux'
import WebStore from '../WebStore/Components'
const GetCategory = () => {
  return { type: 'LAY_TAT_CA_DANH_MUC' }
}
const LayTokenDangXuat = (token) => {
    return { type: 'LAY_THONG_TIN_DANG_XUAT', token:token }
}
const mapDispatchToProps = dispatch => {
    return {
      GetCategory: () => dispatch(GetCategory()),
        LayTokenDangXuat:(token) => dispatch(LayTokenDangXuat(token))
    }
}
export default connect(null, mapDispatchToProps)(WebStore)



