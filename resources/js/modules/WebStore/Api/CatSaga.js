import { put, call, takeLatest } from "redux-saga/effects";

function* AddCart(cart) {
  console.log(cart)
    const axiosAddCart = () => {
      return axios({
        method: 'post',
        url: '/api/order/add',
        params:cart.cart,
        }).then( (cart)=>({ cart }) )
    };
  
    try {
      const response= yield call(axiosAddCart);
      // const data= response.response.data;
      console.log(response)
      yield put({ type: "ORDER_THANH_CONG"});
    } catch(err){
      yield put({ type: "ORDER_ERR",err:true});
    }
  }
  export function* DatHang() {
    yield takeLatest("DAT_HANG", AddCart);
  }
  ///////

  function* orders() {
    try {
      console.log(11111)
      const ResOrder= yield call(axios.get,`/api/order/`,{headers:{ 'Content-Type': 'application/json',
      'Accept':'application/json'}});
        yield put({type: "LAY_TAT_CA_DON_HANG_THANH_CONG",orders:ResOrder.data})
    } catch (error) {
        console.log(error.response)
   }
  }
  export function* getOrders() {
  yield takeLatest("LAY_TAT_CA_DON_HANG", orders);
  }