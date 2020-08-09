import { connect } from 'react-redux'
import Dashboard from '../components/Dashboard'
const getContacts = () => {
  return { type: 'LAY_TAT_CA_CONTACT' }
}
const getOders = () => {
  return { type: 'LAY_TAT_CA_DON_HANG' }
}

const mapDispatchToProps = dispatch => {
    return {
        getContacts:()=>dispatch(getContacts()),
        getOders:()=>dispatch(getOders())
    }
}
export default connect(null, mapDispatchToProps)(Dashboard)