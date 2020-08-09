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
    yield put({ type: "ADD_CATEGORY",categoryAddNew:category.category});
  } catch(err){
    yield put({ type: "ERR_ADD_CATEGORYS",err:'Tên danh mục đã tồn tại'});
  }
}
export function* AddCategory() {
  yield takeLatest("THEM_DANH_MUC_MOI", AddC);
}

/////////////////////////////////////
/////////////////////////////////////

function* EditC(category) {
  console.log(category)
  try {
    const res= yield call(axios.post,`/api/category/update/${category.category.id}`,category.category);
    yield put({ type: "SUA_CATEGORY_THANH_CONG",isEditCategory:true});

  } catch (error) {
    console.log('err')
  }
}
export function* EditCategory() {
yield takeLatest("SUA_DANH_MUC", EditC);
}


/////////////////////////////////////
/////////////////////////////////////

function* deleteC(category) {
    try {
      const res= yield call(axios.post,`/api/category/delete/${category.category}`);
        // yield put({type: "XOA_SAN_DANH_MUC_CONG",statusDelete:true})
    } catch (error) {
      console.log("error")
    }
  }
  export function* DeleteCategory() {
  yield takeLatest("XOA_DANH_MUC", deleteC);
  }
///////////////////////////////////////////

function* Get1Category(category) {
  try {
    const res= yield call(axios.get,`/api/category/${category.category}`);
    yield put({ type: "GET_1_CATEGORY_THANH_CONG",category:res.data});
  } catch (error) {
  }
}
export function* tim1DanhMuc() {
yield takeLatest("TIM_DANH_MUC", Get1Category);
}
