import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCb117uxqB7JIubFXyf7GHg8wYWBYS94BU",
  authDomain: "project-e-ride-7e43e.firebaseapp.com",
  projectId: "project-e-ride-7e43e",
  storageBucket: "project-e-ride-7e43e.appspot.com",
  messagingSenderId: "678891108797",
  appId: "1:678891108797:web:16e6a0362f10ab89efbad4"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
