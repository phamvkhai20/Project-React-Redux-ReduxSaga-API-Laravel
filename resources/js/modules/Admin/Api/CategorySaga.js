import { put, call, takeLatest } from "redux-saga/effects";

function* Categories() {
    try {
      const categories= yield call(axios.get,`/api/category/`,{headers:{ 'Content-Type': 'application/json',
      'Accept':'application/json'}});
        yield put({type: "LAY_TAT_CA_DANH_MUC_THANH_CONG",categories:categories.data})
    } catch (error) {
        console.log(error.response)
   }
}
export function* getCategories() {
yield takeLatest("LAY_TAT_CA_DANH_MUC", Categories);
}


/////////////////////////////////////
/////////////////////////////////////
function* AddC(category) {
  const axiosDanhMuc = () => {
    return axios({
      method: 'post',
      url: '/api/category/add',
      params:category.category,
      }).then( (category)=>({ category }) )
  };

  try {
    const response= yield call(axiosDanhMuc);
    // const data= response.response.data;
    console.log(response)
    yield put({ type: "ADD_CATEGORY",categoryAddNew:category.category,err:false});
  } catch(err){
    console.log(err.response.data.errors)
    yield put({ type: "ERR_ADD_CATEGORY",err:true});
  }
}
export function* AddCategory() {
  yield takeLatest("THEM_DANH_MUC_MOI", AddC);
}

/////////////////////////////////////
/////////////////////////////////////

function* EditC(category) {
  try {
    const products= yield call(axios.post,`/api/category/update/${category.category.id}`,category.category);
  } catch (error) {
  }
}
export function* EditCategory() {
yield takeLatest("SUA_DANH_MUC", EditC);
}

/////////////////////////////////////
/////////////////////////////////////

function* deleteC(category) {
  console.log(1111,category.category);
    try {
      const categorys= yield call(axios.post,`/api/category/delete/${category.category}`);
      console.log(categorys);
        // yield put({type: "XOA_SAN_DANH_MUC_CONG",statusDelete:true})
    } catch (error) {
      console.log("error")
    }
  }
  export function* DeleteCategory() {
  yield takeLatest("XOA_DANH_MUC", deleteC);
  }
  