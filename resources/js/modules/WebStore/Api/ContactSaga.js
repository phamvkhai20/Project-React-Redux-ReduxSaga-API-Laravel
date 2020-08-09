import { put, call, takeLatest } from "redux-saga/effects";

function* addContact(contact) {
  console.log(343,contact)
    const axiosAddContact = () => {
      return axios({
        method: 'post',
        url: '/api/contact/add',
        params:contact.contact,
        }).then( (cart)=>({ cart }) )
    };
  
    try {
      const response= yield call(axiosAddContact);
      // const data= response.response.data;
      console.log(response)
      yield put({ type: "THEM_CONTACT_THANH_CONG"});
    } catch(err){
      yield put({ type: "THEM_CONTACT_THAT_BAI",err:true});
    }
  }
  export function* guiContact() {
    yield takeLatest("GUI_CONTACT", addContact);
  }
  ////////////////////////////

function* contacts() {
  try {
    console.log(11111)
    const contactsRes= yield call(axios.get,`/api/contact/`,{headers:{ 'Content-Type': 'application/json',
    'Accept':'application/json'}});
      yield put({type: "LAY_TAT_CA_LIEN_HE_THANH_CONG",contacts:contactsRes.data})
  } catch (error) {
      console.log(error.response)
 }
}
export function* getContacts() {
yield takeLatest("LAY_TAT_CA_CONTACT", contacts);
}
