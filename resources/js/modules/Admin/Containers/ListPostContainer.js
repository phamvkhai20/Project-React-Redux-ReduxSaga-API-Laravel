import { connect } from 'react-redux'
import ListPost from '../components/Post/ListPost'
const GetPost = () => {
  return { type: 'LAY_TAT_CA_BAI_VIET' }
}
const deletePost = (post) => {
  return { type: 'XOA_BAI_VIET' ,post:post}
}
const mapDispatchToProps = dispatch => {
    return {
        GetPost:()=>dispatch(GetPost()),
        deletePost:(post)=>dispatch(deletePost(post))
    }
  }
export default connect(null, mapDispatchToProps)(ListPost)



