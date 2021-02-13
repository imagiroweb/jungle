import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyD_F64niuKyB0IsZq7UApBjgvB08Ego5Kk",
    authDomain: "jungle-819e7.firebaseapp.com",
    projectId: "jungle-819e7",
    storageBucket: "jungle-819e7.appspot.com",
    messagingSenderId: "537312522317",
    appId: "1:537312522317:web:3d9bb5765f8ad40b436c04",
    measurementId: "G-THJE45K199"
};
  
firebase.initializeApp(config);
export const firestore = firebase.firestore();
export const auth = firebase.auth();
export const datas = {
  todos: () => {
    return firestore.collection('todos')
  }
}

export const generateDocumentUser = async (user, additionalData) => {
    if (!user) return;
    const userRef = firestore.doc(`users/${user.uid}`);
    const snapshot = await userRef.get();
    if (!snapshot.exists) {
      const { email, displayName, photoURL } = user;
      try {
        await userRef.set({
          displayName,
          email,
          photoURL,
          ...additionalData
        });
      } catch (error) {
        console.error("Error creating user document", error);
      }
    }
    return getUserDocument(user.uid);
};

const getUserDocument = async (uid) => {
    if (!uid) return null;
    try {
      const userDocument = await firestore.doc(`users/${uid}`).get();
      return {
        uid,
        ...userDocument.data()
      };
    } catch (error) {
      console.error("Error fetching user", error);
    }
};

export default firebase;
