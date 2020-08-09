import { connect } from 'react-redux'
import AddPost from '../components/Post/AddPost'
const ThemBaiViet = (post) => {
  return { type: 'THEM_BAI_VIET_MOI',post:post}
}
const mapDispatchToProps = dispatch => {
    return {
      ThemBaiViet:(post)=> dispatch(ThemBaiViet(post)),
    }
}
export default connect(null, mapDispatchToProps)(AddPost)