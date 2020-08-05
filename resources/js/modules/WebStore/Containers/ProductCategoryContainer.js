import { connect } from 'react-redux'
import ProductCategory from '../Components/Product/ProductCategory'

const getProductCategory = (id) => {
  return { type: 'GET_SP_TRONG_CARTEGORY',id:id }
}
const mapDispatchToProps = dispatch => {
    return {
        getProductCategory: (id) => dispatch(getProductCategory(id)),
    }
  }
export default connect(null, mapDispatchToProps)(ProductCategory)