const initialState ={
    infoUser:{},
    infoLogin:{},
    infoUser:'',
    error:'',
    errorDangKi:{},
    isdangki:false,
    isDangNhap:false,
    isDangXuat:false,
}
const AuthReducer =(state = initialState,action)=>{
    switch (action.type) {
        case 'DANG_NHAP_THANH_CONG':
            return {...state,error:action.error,isDangNhap:action.isDangNhap,infoLogin:action.infoLogin};
        case 'DANG_NHAP_THAT_BAI':
            return {...state,error:action.error};
        case 'LAY_THONG_TIN_USER_THANH_CONG':
            return {...state,infoUser:action.infoUser};
        case 'LAY_THONG_TIN_USER_THAT_BAI':
            return state;
        case 'DANG_XUAT_THANH_CONG':
            return {...state,isDangXuat:action.isDangXuat};
        case 'DANG_XUAT_THAT_BAI':
            return state;
        case 'DANG_KI_THANH_CONG':
            return {...state,isdangki:action.isDangKi};
        case 'DANG_KI_THAT_BAI':
            return {...state,errorDangKi:action.error};
        default:
            return state;
    }
}
export default AuthReducer;




