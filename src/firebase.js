import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCmmefywUBDmx3K3QlfTjeCVRqu98GHboo",
  authDomain: "todo-app-91c86.firebaseapp.com",
  projectId: "todo-app-91c86",
  storageBucket: "todo-app-91c86.appspot.com",
  messagingSenderId: "1017248351153",
  appId: "1:1017248351153:web:68325a34062db18bc63390",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();

export default firebaseApp;
