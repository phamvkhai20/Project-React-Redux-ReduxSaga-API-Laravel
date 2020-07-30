const initialState ={
    products:'',
    updateProduct:{},
    isUpdateProduct:false
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
            return {...state,isUpdateProduct:false};
        default:
            return state;
    }
}
export default ProductReducer;




