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
////////////////////////////
function* AddP(product) {
  console.log('qweqweqw',product)
  const axiosThemSanPham = () => {
    return axios({
      method: 'post',
      url: '/api/product/add',
      params:product.product,
      }).then( (response)=>({ response }) )
  };
  try {
    const response= yield call(axiosThemSanPham);
    const data= response.response.data;
    yield put({ type: "ADD_PRODUCT",proudctAddNew:product.product});
  } catch(err){
    console.log(err.response.data.errors)
  }
}
export function* AddProduct() {
  yield takeLatest("THEM_SAN_PHAM_MOI", AddP);
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


function* FindP(product) {
  try {
    const products= yield call(axios.get,`/api/product/update/${product.product.id}`);
  } catch (error) {
  }
}
export function* FindProduct() {
yield takeLatest("TIM_SAN_PHAM", FindP);
} 



function* ChitietP(product) {
  const id=Number(product.product);
  try {
    const product1= yield call(axios.get,`/api/product/${id}`);
    yield put({type: "LAY_SAN_PHAM_THANH_CONG",product:product1.data})
  } catch (error) {
  }
}
export function* SingleProduct() {
yield takeLatest("CHI_TIET_SAN_PHAM", ChitietP);
} 


function* cart(arr) {
  try {
    const product1= yield call(axios.get,`/api/product/cart/${arr.arr}`);
    console.log(888,product1)
    yield put({type: "LAY_SP_TRONG_CART_THANH_CONG",cart:product1.data})
  } catch (error) {
    console.log(888)
    
  }
}
export function* getProductCart() {
yield takeLatest("GET_SP_TRONG_CAR", cart);
} 

function* listPro(arr) {
  try {
    const product1= yield call(axios.get,`/api/product/deleteList/${arr.arr}`);
  } catch (error) {
  }
}
export function* xoaListSP() {
yield takeLatest("XOA_LIST_SAN_PHAM", listPro);
} 



function* productCategory(id) {
  try {
    const product= yield call(axios.get,`/api/product/getProductCategory/${id.id}`);
    yield put({type: "LAY_SP_TRONG_DANH_MUC_THANH_CONG",productCategory:product.data})
  } catch (error) {
  }
}
export function* getProductCategory() {
yield takeLatest("GET_SP_TRONG_CARTEGORY", productCategory);
} 