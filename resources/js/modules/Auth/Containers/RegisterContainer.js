import { connect } from 'react-redux'
import Register from '../Components/Register'

const LayThongDangKi = (infoDangKi) => {
  return { type: 'LAY_THONG_TIN_DANG_KI', infoDangKi:infoDangKi }
}

const mapDispatchToProps = dispatch => {
    return {
      // dispatching actions returned by action creators
      LayThongDangKi: (infoDangKi) => dispatch(LayThongDangKi(infoDangKi)),
    }
  }
export default connect(null, mapDispatchToProps)(Register)