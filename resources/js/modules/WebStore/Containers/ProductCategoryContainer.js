import { connect } from 'react-redux'
import ProductCategory from '../Components/Product/ProductCategory'

const getProductCategory = (id) => {
  return { type: 'GET_SP_TRONG_CARTEGORY',id:id }
}

const GetCategory = () => {
  return { type: 'LAY_TAT_CA_DANH_MUC' }
}

const mapDispatchToProps = dispatch => {
    return {
        getProductCategory: (id) => dispatch(getProductCategory(id)),
        GetCategory:()=>dispatch(GetCategory())

    }
  }
export default connect(null, mapDispatchToProps)(ProductCategory)