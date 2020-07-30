import { connect } from 'react-redux'
import EditProduct from '../components/Product/EditProduct'
const GetProduct = () => {
  return { type: 'LAY_TAT_CA_SAN_PHAM' }
};
const SuaSanPham = (product) => {
  return { type: 'SUA_SAN_PHAM',product:product }
}
const mapDispatchToProps = dispatch => {
    return {
        
        GetProduct: () => dispatch(GetProduct()),
        SuaSanPham:(product)=> dispatch(SuaSanPham(product))
    }
  }
export default connect(null, mapDispatchToProps)(EditProduct)



