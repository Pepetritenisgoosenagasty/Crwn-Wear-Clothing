import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBHwJXyR3-xoJCo5GGCG6rZLKjppIqX0Kc",
    authDomain: "crwn-db-66451.firebaseapp.com",
    databaseURL: "https://crwn-db-66451-default-rtdb.firebaseio.com",
    projectId: "crwn-db-66451",
    storageBucket: "crwn-db-66451.appspot.com",
    messagingSenderId: "1024822368862",
    appId: "1:1024822368862:web:1c8456262b8d335e0c32cf"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
 
    const userRef = firestore.doc(`users/${userAuth.uid}`);
 
    const snapshot = await userRef.get();
 
    if (!snapshot.exists) {
      const {displayName, email} = userAuth;
      const createdAt = new Date();
 
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('error creating user', error.message)
      }
    }
 
    return userRef;
   }
 

export default firebase;