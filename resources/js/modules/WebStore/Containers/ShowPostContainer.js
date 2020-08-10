import { connect } from 'react-redux'
import ShowPost from '../Components/Post'
const GetPost = () => {
  return { type: 'LAY_TAT_CA_BAI_VIET' }
}
const mapDispatchToProps = dispatch => {
    return {
        GetPost:()=>dispatch(GetPost()),
        deletePost:(post)=>dispatch(deletePost(post))
    }
  }
export default connect(null, mapDispatchToProps)(ShowPost)



