import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDo7xGRGViBd6YO2vnhv-3kD4pVx5fI7po",
  authDomain: "messenger-clone-63b48.firebaseapp.com",
  databaseURL: "https://messenger-clone-63b48.firebaseio.com",
  projectId: "messenger-clone-63b48",
  storageBucket: "messenger-clone-63b48.appspot.com",
  messagingSenderId: "495948578551",
  appId: "1:495948578551:web:b84818ac004f7d8f209df2",
  measurementId: "G-EZ7N3L1ZLG",
});

const db = firebaseApp.firestore();

export default db;
