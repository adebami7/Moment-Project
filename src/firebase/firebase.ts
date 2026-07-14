import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";


const firebaseConfig ={
  apiKey: "AIzaSyB-_pGaR6TMXqUu-h9M_3d7IpTHrfVRvZ0",
  authDomain: "moment-97a72.firebaseapp.com",
  projectId: "moment-97a72",
  storageBucket: "moment-97a72.appspot.com",
  messagingSenderId: "796853834293",
  appId: "1:796853834293:web:bf0b0df4e1cc976f2f577c",
  measurementId: "G-DS5PW278GL"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// export {db, auth, storage};
