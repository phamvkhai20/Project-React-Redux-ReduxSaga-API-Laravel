import { connect } from 'react-redux'
import SinglePost from '../Components/Post/SinglePost'

const tim1BaiViet = (post) => {
  return { type: 'TIM_BAI_VIET',post:post}
}

const mapDispatchToProps = dispatch => {
    return {
      tim1BaiViet: (post) => dispatch(tim1BaiViet(post)),
    }
  }
export default connect(null, mapDispatchToProps)(SinglePost)



