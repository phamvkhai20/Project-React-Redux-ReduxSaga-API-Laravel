import firebase from 'firebase/app';
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDX3DnAX1A3RB5KLiDLfM_xbx9k6fVLbWM",
    authDomain: "phamvkhai20-e9657.firebaseapp.com",
    databaseURL: "https://phamvkhai20-e9657.firebaseio.com",
    projectId: "phamvkhai20-e9657",
    storageBucket: "phamvkhai20-e9657.appspot.com",
    messagingSenderId: "345081621130",
    appId: "1:345081621130:web:b184825333bb60131a5b73",
    measurementId: "G-JGETFQZK17"
  };

firebase.initializeApp(firebaseConfig)

const storage = firebase.storage();
export {storage,firebase as default};