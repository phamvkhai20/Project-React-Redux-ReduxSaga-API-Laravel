
import { put, call, takeLatest } from "redux-saga/effects";
import { defaultsDeep } from "lodash";
function* LayThongTinUser(token) {
    const axiosGetUser = () => {
      return axios({
        method: 'get',
        url: '/api/auth/user',
        headers: {
          'Content-Type': 'application/json',
          'Accept':'application/json',
          'Authorization': `Bearer ${token.token}`   
        },})
      .then( (response)=>({ response }) )
    .catch( (error) => ({error}))
    };
    try {
      const response= yield call(axiosGetUser);
      yield put({type: "LAY_THONG_TIN_USER_THANH_CONG",infoUser:response.response.data});
    } catch (error) {
      console.log('err');
        yield put({type: "LAY_THONG_TIN_USER_THAT_BAI"});
    }
  }
  
  export default function* getUser() {
    yield takeLatest("GET_INFO_USER", LayThongTinUser);
  }
  
  
  
  