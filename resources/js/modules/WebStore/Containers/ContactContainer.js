

import { connect } from 'react-redux'
import Contact from '../Components/Contact'
const guiContact = (contact) => {
  return { type: 'GUI_CONTACT' ,contact:contact}
}
const mapDispatchToProps = dispatch => {
    return {
        guiContact: (contact) => dispatch(guiContact(contact))
    }
}
export default connect(null, mapDispatchToProps)(Contact)