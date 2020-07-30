import { put, call, takeLatest } from "redux-saga/effects";
import { defaultsDeep } from "lodash";
function* layThongTinDangKi(infoDangKi) {
  
  const axiosDangki = () => {
    return axios({
      method: 'post',
      url: '/api/auth/signup',
      params:infoDangKi.infoDangKi,
      }).then( (response)=>({ response }) )
  };
  try {
    const response= yield call(axiosDangki);
    const data= response.response.data;
    yield put({ type: "DANG_KI_THANH_CONG",isDangKi:true});
  } catch(err){
    yield put({ type: "DANG_KI_THAT_BAI",error:err.response.data.errors});
    
  }
}

export default function* Register() {
  yield takeLatest("LAY_THONG_TIN_DANG_KI", layThongTinDangKi);
}
