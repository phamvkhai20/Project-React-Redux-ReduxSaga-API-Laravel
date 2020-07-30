import { connect } from 'react-redux'
import Header from '../../Admin/Components/Layout/Header'

const LayTokenDangXuat = (token) => {
  return { type: 'LAY_THONG_TIN_DANG_XUAT', token:token }
}
const mapDispatchToProps = dispatch => {
    return {
        LayTokenDangXuat: (token) => dispatch(LayTokenDangXuat(token)),
    }
  }
export default connect(null, mapDispatchToProps)(Header)



