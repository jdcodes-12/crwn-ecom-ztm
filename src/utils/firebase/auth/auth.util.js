import { firebaseApp } from '../firebase.util';

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from 'firebase/auth';

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth(firebaseApp);

export async function signInWithGooglePopup() {
  try {
    return await signInWithPopup(auth, googleProvider);
  } catch(error) {
    console.log(`signInWithGooglePopup(): ${error}`);
  }
}

export async function createAuthUserWithEmailAndPassword(email, password) {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
}