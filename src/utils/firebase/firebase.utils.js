import { initializeApp } from "firebase/app";
import { firebaseConfig } from './firebase.config';

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';


const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth();

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export async function signInWithGooglePopup() {
  await signInWithPopup(auth, googleProvider);
}
