const initialState ={
    contacts:'',
    
}
const DashboardReducer =(state = initialState,action)=>{
    switch (action.type) {
        case 'LAY_TAT_CA_LIEN_HE_THANH_CONG':
            return {...state,contacts:action.contacts};
        default:
            return state;
    }
}
export default DashboardReducer;
 



