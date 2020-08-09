const initialState ={
    categories:'',
    categoryAddNew:'',
    isAddCate:false,
    err:false,
    errAddCarts:'',
    motCategory:'',
    isEditCategory:false
}
const CategoryReducer =(state = initialState,action)=>{
    switch (action.type) {
        case 'LAY_TAT_CA_DANH_MUC_THANH_CONG':
            return {...state,categories:action.categories};
        case 'ADD_CATEGORY':
            return {...state,err:true,isAddCate:true};
        case 'ERR_ADD_CATEGORYS':
            return {...state,errAddCarts:action.err};
        case 'SET_ADD_CATE':
            return {...state,isAddCate:false};        
        case 'GET_1_CATEGORY_THANH_CONG':
            return {...state,motCategory:action.category};
        case 'SUA_CATEGORY_THANH_CONG':
            return {...state,isEditCategory:action.isEditCategory};
        case 'SET_EDIT_CATE':
            return {...state,isEditCategory:false};
        default:
            return state;
    }
}
export default CategoryReducer;




