import { connect } from 'react-redux'
import AddProduct from '../components/Product/AddProduct'
const ThemSanPham = (product) => {
  return { type: 'THEM_SAN_PHAM_MOI',product:product}
}
const GetCategory = () => {
  return { type: 'LAY_TAT_CA_DANH_MUC' }
}
const mapDispatchToProps = dispatch => {
    return {
        ThemSanPham:(product)=> dispatch(ThemSanPham(product)),
        GetCategory: ()=> dispatch(GetCategory())
    }
}
export default connect(null, mapDispatchToProps)(AddProduct)