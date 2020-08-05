

import { connect } from 'react-redux'
import Header from '../Components/Layout/Header'
const GetCategory = () => {
  return { type: 'LAY_TAT_CA_DANH_MUC' }
}
const LayTokenDangXuat = (token) => {
    return { type: 'LAY_THONG_TIN_DANG_XUAT', token:token }
}
const getProductCategory = (id) => {
  return { type: 'GET_SP_TRONG_CARTEGORY',id:id }
}
const mapDispatchToProps = dispatch => {
    return {
      GetCategory: () => dispatch(GetCategory()),
        LayTokenDangXuat:(token) => dispatch(LayTokenDangXuat(token)),
        getProductCategory:(id)=> dispatch(getProductCategory(id))
    }
}
export default connect(null, mapDispatchToProps)(Header)



