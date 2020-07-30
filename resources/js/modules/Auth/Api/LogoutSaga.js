
import { put, call, takeLatest } from "redux-saga/effects";
import { defaultsDeep } from "lodash";
function* LayThongTinLogout(token) {
    const axiosDangXuat = () => {
      return axios({
        method: 'get',
        url: '/api/auth/logout',
        headers: {
          'Content-Type': 'application/json',
          'Accept':'application/json',
          'Authorization': `Bearer ${token.token}`   
        },})
      .then( (response)=>({ response }) )
    .catch( (error) => ({error}))
    };
    try {
      const response= yield call(axiosDangXuat);
      yield put({type: "DANG_XUAT_THANH_CONG",isDangXuat:true});
      yield put({type: "SET_TOKEN_LOGIN",token:'null'});
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token")
    } catch (error) {

    }
  }
  
  export default function* Logout() {
    yield takeLatest("LAY_THONG_TIN_DANG_XUAT", LayThongTinLogout);
  }
  
  
  
  