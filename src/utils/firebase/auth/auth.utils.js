import { firebaseApp } from '../firebase.utils';

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

const auth = getAuth(firebaseApp);

export async function signInWithGooglePopup() {
  try {
    return await signInWithPopup(auth, googleProvider);
  } catch(error) {
    console.log(`signInWithGooglePopup(): ${error}`);
  }
}
