const initialState ={
    orders:'',
    getOrder:''
  
}
const OrderReducer =(state = initialState,action)=>{
    switch (action.type) {
        case 'LAY_TAT_CA_DON_HANG_THANH_CONG':
            return {...state,orders:action.order};
        case 'GET_1_DON_HANG_THANH_CONG':
            return {...state,getOrder:action.order};
        // case 'SUA_BAI_VIET_THANH_CONG':
        //     return {...state,isEditpost:action.isEditpost};
        // case 'ADD_POST':
        //     return {...state,isAddPost:true};
        // case 'RS_IS_EDIT':
        //     return {...state,isEditpost:false};
        // case 'RS_IS_ADD':
        //     return {...state,isEditpost:false};
        default:
        return state;
    }
}
export default OrderReducer;
 



