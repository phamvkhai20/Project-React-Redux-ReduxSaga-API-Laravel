const initialState ={
    totalProduct:'',
    isAddCart:false
}
const CartReducer =(state = initialState,action)=>{
    switch (action.type) {
        case 'SET_ITEM_CART':
            return {...state,totalProduct:action.product};
        case 'ADD_CART_THANH_CONG':
            return {...state,isAddCart:true};
        default:
            return state;
    }
}
export default CartReducer;




