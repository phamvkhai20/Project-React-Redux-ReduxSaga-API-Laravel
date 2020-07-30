import { connect } from 'react-redux'
import Login from '../Components/Login'

const LayThongTinDangNhap = (infoLogin) => {
  return { type: 'LAY_THONG_TIN_DANG_NHAP', infoLogin:infoLogin }
}
const mapDispatchToProps = dispatch => {
    return {
      LayThongTinDangNhap: (infoLogin) => dispatch(LayThongTinDangNhap(infoLogin)),
    }
  }
export default connect(null, mapDispatchToProps)(Login)