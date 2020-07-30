import { put, call, takeLatest } from "redux-saga/effects";
import { defaultsDeep } from "lodash";
function* Products() {
    try {
      const products= yield call(axios.get,`/api/product/`,{headers:{ 'Content-Type': 'application/json',
      'Accept':'application/json'}});
        yield put({type: "LAY_TAT_CA_SAN_PHAM_THANH_CONG",products:products.data})
    } catch (error) {
        console.log(error.response)
   }
  }
export function* getProduct() {
yield takeLatest("LAY_TAT_CA_SAN_PHAM", Products);
}
function* deleteP(product) {
console.log(product);
  try {
    const products= yield call(axios.post,`/api/product/delete/${product.id}`);
    console.log(products);
      yield put({type: "XOA_SAN_PHAM_THANH_CONG",statusDelete:true})
  } catch (error) {
  }
}
export function* DeleteProduct() {
yield takeLatest("XOA_SAN_PHAM", deleteP);
}
function* EditP(product) {
  try {
    const products= yield call(axios.post,`/api/product/update/${product.product.id}`,product.product);
  } catch (error) {
  }
}
export function* EditProduct() {
yield takeLatest("SUA_SAN_PHAM", EditP);
} 