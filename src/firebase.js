import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "abhiadmin-4a086.firebaseapp.com",
  projectId: "abhiadmin-4a086",
  storageBucket: "abhiadmin-4a086.appspot.com",
  messagingSenderId: "625816984428",
  appId: "1:625816984428:web:ecdf7fdfcb2172a9c37149",
  measurementId: "G-P631ZVR04Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
// const analytics = getAnalytics(app);
