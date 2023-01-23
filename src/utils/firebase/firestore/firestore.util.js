import { firebaseApp } from '../firebase.util';

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch
} from 'firebase/firestore';

const firestore = getFirestore(firebaseApp);

export async function addCollectionAndDocuments(collectionKey, objectsToAdd) {
  const collectionRef = collection(firestore, collectionKey);
  const batch = writeBatch(firestore);

  objectsToAdd.forEach(async (object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log('Done writing');
}

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