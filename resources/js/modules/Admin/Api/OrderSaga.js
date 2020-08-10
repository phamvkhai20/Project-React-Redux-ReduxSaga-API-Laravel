import { put, call, takeLatest } from "redux-saga/effects";

function* Orders() {
    try {
      const Orders= yield call(axios.get,`/api/order/`,{headers:{ 'Content-Type': 'application/json',
      'Accept':'application/json'}});
        yield put({type: "LAY_TAT_CA_DON_HANG_THANH_CONG",order:Orders.data})
    } catch (error) {
        console.log(error.response)
   }
}
export function* getListOrders() {
yield takeLatest("LAY_TAT_CA_DON_HANG", Orders);
}
/////////////////////////////////////
/////////////////////////////////////
// function* Addorder(order) {
//   const axiosBaiViet = () => {
//     return axios({
//       method: 'order',
//       url: '/api/order/add',
//       params:order.order,
//       }).then( (order)=>({ order }) )
//   };

//   try {
//     const response= yield call(axiosBaiViet);
//     yield put({ type: "ADD_order",isAddorder:true});
//   } catch(err){
//     yield put({ type: "ERR_ADD_Orders",err:'Tên danh mục đã tồn tại'});
//   }
// }
// export function* Addorder() {
//   yield takeLatest("THEM_DON_HANG_MOI", Addorder);
// }

// /////////////////////////////////////
// /////////////////////////////////////

// function* EditP(order) {
//   console.log(2222,order)
//   try {
//     const res= yield call(axios.order,`/api/order/update/${order.id}`,order.order);
//     yield put({ type: "SUA_DON_HANG_THANH_CONG",isEditorder:true});

//   } catch (error) {
//     console.log('err')
//   }
// }
// export function* Editorder() {
// yield takeLatest("SUA_DON_HANG", EditP);
// }


// /////////////////////////////////////
// /////////////////////////////////////

// function* deleteC(order) {
//     try {
//       const res= yield call(axios.order,`/api/order/delete/${order.order}`);
//         // yield put({type: "XOA_SAN_DON_HANG_CONG",statusDelete:true})
//     } catch (error) {
//       console.log("error")
//     }
//   }
//   export function* Deleteorder() {
//   yield takeLatest("XOA_DON_HANG", deleteC);
// }
// ///////////////////////////////////////////

function* Get1order(order) {
  try {
    const res= yield call(axios.get,`/api/order/${order.order}`);
    yield put({ type: "GET_1_DON_HANG_THANH_CONG",order:res.data});
  } catch (error) {
  }
}
export function* tim1DonHang() {
yield takeLatest("TIM_DON_HANG", Get1order);
}
