import { put, call, takeLatest } from "redux-saga/effects";
import { defaultsDeep } from "lodash";
function* layThongTinLogin(infoLogin) {
  const axioss = () => {
    return axios({
      method: 'post',
      url: '/api/auth/login',
      headers: {
        'Content-Type': 'application/json',
        'Accept':'application/json'},
      params:infoLogin.infoLogin,
      })
    .then( (response)=>({ response }) )
    .catch( (error) => (console.log(error)))
  };
  try {
    const response= yield call(axioss);
    const data= response.response.data;
    yield put({ type: "DANG_NHAP_THANH_CONG",infoLogin:data,error:"",isDangNhap:true});
    localStorage.setItem('access_token',data.access_token);
    localStorage.setItem('refresh_token',data.refresh_token);
  } catch (error) {
    yield put({type: "DANG_NHAP_THAT_BAI", error:"Tài khoản hoặc mật khẩu không chính xác !"})
 }
}

export default function* Login() {
  yield takeLatest("LAY_THONG_TIN_DANG_NHAP", layThongTinLogin);
}
