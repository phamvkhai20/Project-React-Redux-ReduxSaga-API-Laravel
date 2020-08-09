
import { connect } from 'react-redux'
import EditCategory from '../components/Category/EditCategory'
const tim1DanhMuc = (category) => {
  return { type: 'TIM_DANH_MUC',category:category}
}
const suaCategory = (category) => {
  return { type: 'SUA_DANH_MUC',category:category}
}
const mapDispatchToProps = dispatch => {
    return {
        tim1DanhMuc:(category)=> dispatch(tim1DanhMuc(category)),
        suaCategory:(category)=>dispatch(suaCategory(category))
    }
}
export default connect(null, mapDispatchToProps)(EditCategory)