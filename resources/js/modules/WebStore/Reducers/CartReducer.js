const initialState ={
    totalProduct:'',
    isAddCart:false,
    isOrder:false,
    orders:''
}
const CartReducer =(state = initialState,action)=>{
    switch (action.type) {
        case 'SET_ITEM_CART':
            return {...state,totalProduct:action.product};
        case 'ADD_CART_THANH_CONG':
            return {...state,isAddCart:true};
        case 'ORDER_THANH_CONG':
            return {...state,isOrder:true};
        case 'LAY_TAT_CA_DON_HANG_THANH_CONG':
        return {...state,orders:action.orders};
        default:
            return state;
    }
}
export default CartReducer;




