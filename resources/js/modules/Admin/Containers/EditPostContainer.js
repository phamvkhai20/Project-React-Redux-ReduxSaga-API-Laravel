
import { connect } from 'react-redux'
import EditPost from '../components/Post/EditPost'
const tim1BaiViet = (post) => {
  return { type: 'TIM_BAI_VIET',post:post}
}
const suaPost = (post,id) => {
  return { type: 'SUA_BAI_VIET',post:post,id:id}
}
const mapDispatchToProps = dispatch => {
    return {
        tim1BaiViet:(post)=> dispatch(tim1BaiViet(post)),
        suaPost:(post,id)=>dispatch(suaPost(post,id))
    }
}
export default connect(null, mapDispatchToProps)(EditPost)