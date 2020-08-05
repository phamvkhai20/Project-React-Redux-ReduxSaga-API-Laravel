import { connect } from 'react-redux'
import ListCategory from '../components/Category/ListCategory'
const GetCategory = () => {
  return { type: 'LAY_TAT_CA_DANH_MUC' }
}
const deleteCategory = (category) => {
  return { type: 'XOA_DANH_MUC' ,category:category}
}
const mapDispatchToProps = dispatch => {
    return {
        GetCategory:()=>dispatch(GetCategory()),
        deleteCategory:(category)=>dispatch(deleteCategory(category))
    }
  }
export default connect(null, mapDispatchToProps)(ListCategory)



