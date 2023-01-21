import { firebaseApp } from '../firebase.util';

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
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