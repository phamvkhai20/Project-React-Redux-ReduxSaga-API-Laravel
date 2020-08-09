import { put, call, takeLatest } from "redux-saga/effects";

function* Posts() {
    try {
      const Posts= yield call(axios.get,`/api/post/`,{headers:{ 'Content-Type': 'application/json',
      'Accept':'application/json'}});
        yield put({type: "LAY_TAT_CA_BAI_VIET_THANH_CONG",post:Posts.data})
    } catch (error) {
        console.log(error.response)
   }
}
export function* getPosts() {
yield takeLatest("LAY_TAT_CA_BAI_VIET", Posts);
}


/////////////////////////////////////
/////////////////////////////////////
function* AddPost(post) {
  const axiosBaiViet = () => {
    return axios({
      method: 'post',
      url: '/api/post/add',
      params:post.post,
      }).then( (post)=>({ post }) )
  };

  try {
    const response= yield call(axiosBaiViet);
    yield put({ type: "ADD_POST",isAddPost:true});
  } catch(err){
    yield put({ type: "ERR_ADD_postS",err:'Tên danh mục đã tồn tại'});
  }
}
export function* Addpost() {
  yield takeLatest("THEM_BAI_VIET_MOI", AddPost);
}

/////////////////////////////////////
/////////////////////////////////////

function* EditP(post) {
  console.log(2222,post)
  try {
    const res= yield call(axios.post,`/api/post/update/${post.id}`,post.post);
    yield put({ type: "SUA_BAI_VIET_THANH_CONG",isEditpost:true});

  } catch (error) {
    console.log('err')
  }
}
export function* Editpost() {
yield takeLatest("SUA_BAI_VIET", EditP);
}


/////////////////////////////////////
/////////////////////////////////////

function* deleteC(post) {
    try {
      const res= yield call(axios.post,`/api/post/delete/${post.post}`);
        // yield put({type: "XOA_SAN_BAI_VIET_CONG",statusDelete:true})
    } catch (error) {
      console.log("error")
    }
  }
  export function* Deletepost() {
  yield takeLatest("XOA_BAI_VIET", deleteC);
  }
///////////////////////////////////////////

function* Get1post(post) {
  try {
    const res= yield call(axios.get,`/api/post/${post.post}`);
    yield put({ type: "GET_1_BAI_VIET_THANH_CONG",post:res.data});
  } catch (error) {
  }
}
export function* tim1BaiViet() {
yield takeLatest("TIM_BAI_VIET", Get1post);
}
