import { firebaseApp } from '../firebase.util';

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
} from 'firebase/firestore';

const firestore = getFirestore(firebaseApp);

export async function createUserDocFromAuth(userAuth) {
  const userDocRef = doc(firestore, 'users', userAuth.uid);

  try {
    const userSnapshot = await getDoc(userDocRef);
    if (!userSnapshot.exists()) {
      const newUserData = createUserData(userAuth)
      try {
        await setDoc(userDocRef, newUserData);
      } catch(error) {
        console.log(`setDoc() in CreateUserDocFromAuth(): ${error}`);
      }
    }
  } catch(error) {
    console.log(`createUserDocFromAuth(): ${error}`);
  }

  return userDocRef;
}

function createUserData(userAuth, additionalInfo={}) {
  const { displayName, email } = userAuth;
  const createdAt = new Date();
  return {
    displayName,
    email,
    createdAt,
    ...additionalInfo,
  };
}