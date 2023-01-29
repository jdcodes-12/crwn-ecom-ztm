import { firebaseApp } from '../firebase.util';

import {
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
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

  try {
    return await createUserWithEmailAndPassword(auth, email, password);
  } catch(error) {
    console.log(error);
  }
}

export async function signInAuthUserWithEmailAndPassword(email, password) {
  if (!email || !password) return;

  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch(error) {
    console.log(error);
  }
}

export async function signOutUser() {
  try {
    await signOut(auth);
  } catch(error) {
    console.log(error);
  }
}

export function onAuthStateChangedListener(nextCallback) {
  return onAuthStateChanged(auth, nextCallback);
}

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
        auth,
        (userAuth) => {
          unsubscribe();
          resolve(userAuth);
        },
        reject
      );
  })
}