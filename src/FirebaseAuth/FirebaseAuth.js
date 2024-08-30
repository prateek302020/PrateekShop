
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDTDBuO0k6mIhjuBjUipNt-CcIkep61_rs",
  authDomain: "prateek-shop.firebaseapp.com",
  projectId: "prateek-shop",
  storageBucket: "prateek-shop.appspot.com",
  messagingSenderId: "366819852741",
  appId: "1:366819852741:web:185505aec511a48a594bac"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)


export{app,auth,db};