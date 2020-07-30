const initialState ={
    tokens:'',
}
const SetToken =(state = initialState,action)=>{
    switch (action.type) {
        case 'SET_TOKEN_LOGIN':
            return {...state,tokens:action.token};
        case 'DANG_NHAP_THAT_BAI':
            return {...state,error:action.error};
        default:
            return state;
    }
}
export default SetToken;




