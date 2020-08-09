const initialState ={
    posts:'',
    getPost:'',
    isEditpost:false,
    isAddPost:false
}
const PostReducer =(state = initialState,action)=>{
    switch (action.type) {
        case 'LAY_TAT_CA_BAI_VIET_THANH_CONG':
            return {...state,posts:action.post};
        case 'GET_1_BAI_VIET_THANH_CONG':
            return {...state,getPost:action.post};
        case 'SUA_BAI_VIET_THANH_CONG':
            return {...state,isEditpost:action.isEditpost};
        case 'ADD_POST':
            return {...state,isAddPost:true};
        case 'RS_IS_EDIT':
            return {...state,isEditpost:false};
        case 'RS_IS_ADD':
            return {...state,isEditpost:false};
        default:
        return state;
    }
}
export default PostReducer;
 



