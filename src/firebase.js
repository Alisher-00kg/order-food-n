import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA-tmDj41Y9okij7a_r6g36wsMoylzI9GY",
  authDomain: "ytrhe-6fedb.firebaseapp.com",
  projectId: "ytrhe-6fedb",
  storageBucket: "ytrhe-6fedb.firebasestorage.app",
  messagingSenderId: "340136145597",
  appId: "1:340136145597:web:62418f9efc82470e667dd4",
  measurementId: "G-MXQZHVJ7BP",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const login = () => signInWithPopup(auth, provider);
const logout = () => signOut(auth);

export { auth, login, logout };
