import { connect } from 'react-redux'
import AddCategory from '../components/Category/AddCategory'
const ThemDanhMuc = (category) => {
  return { type: 'THEM_DANH_MUC_MOI',category:category}
}

const mapDispatchToProps = dispatch => {
    return {
        ThemDanhMuc:(category)=> dispatch(ThemDanhMuc(category)),
    }
}
export default connect(null, mapDispatchToProps)(AddCategory)