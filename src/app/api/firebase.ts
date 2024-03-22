import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyARsbGPanBVW-LO-64hJ4CQ69k_TMhesUY",
  authDomain: "your-weding-app.firebaseapp.com",
  projectId: "your-weding-app",
  storageBucket: "your-weding-app.appspot.com",
  messagingSenderId: "771470132661",
  appId: "1:771470132661:web:7ea2bca1ce497339e505fc",
  measurementId: "G-C6QLYN0B21"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const getDb = getFirestore(app);
const storage = getStorage(app);


export { app,  auth, getDb, storage};
