const initialState ={
    products:'',
    updateProduct:'',
    isUpdateProduct:false,
    isAddProduct:false,
    proudctAddNew:'',
    product:'',
    productCart:'',
    album:'',
    productCategory:''
}
const ProductReducer =(state = initialState,action)=>{
    switch (action.type) {
        case 'LAY_TAT_CA_SAN_PHAM_THANH_CONG':
            return {...state,products:action.products};
        case 'XOA_PHAM_THANH_CONG':
            return state;
        case 'UPDATE_PRODUCT':
            return {...state,updateProduct:action.payload,isUpdateProduct:true};
        case 'UPDATE_IS_PRODUCT':
            return {...state,isUpdateProduct:false,isAddProduct:false};
        case 'ADD_PRODUCT':
            return {...state,isAddProduct:true,proudctAddNew:action.proudctAddNew,album:''};
        case 'UPDATE_IS_ADD_PRODUCT':
            return {...state,isAddProduct:false};
        case 'LAY_SAN_PHAM_THANH_CONG':
            return {...state,product:action.product};
        case 'LAY_SP_TRONG_CART_THANH_CONG':
            return {...state,productCart:action.cart};    
        case 'SET_IMAGE_ALBUM':
            return {...state,album:action.payload};   
        case 'LAY_SP_TRONG_DANH_MUC_THANH_CONG':
            return {...state,productCategory:action.productCategory};    
        default:
            return state;
    }
}
export default ProductReducer;




