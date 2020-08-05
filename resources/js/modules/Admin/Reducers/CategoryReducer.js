const initialState ={
    categories:'',
    categoryAddNew:'',
    err:false,
}
const CategoryReducer =(state = initialState,action)=>{
    switch (action.type) {
        case 'LAY_TAT_CA_DANH_MUC_THANH_CONG':
            return {...state,categories:action.categories};
        case 'ADD_CATEGORY':
            return {...state,categoryAddNew:action.category,err:false};
        case 'ERR_ADD_CATEGORY':
            return {...state,err:action.err};
        default:
            return state;
    }
}
export default CategoryReducer;




