import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD70IkdICLtXvdUoakgDNOsdIUZp5YyR5Y",
  authDomain: "ecommerce-coder-cea52.firebaseapp.com",
  projectId: "ecommerce-coder-cea52",
  storageBucket: "ecommerce-coder-cea52.appspot.com",
  messagingSenderId: "632154408081",
  appId: "1:632154408081:web:5969db586e204a8020ab30",
};

const app = firebase.initializeApp(firebaseConfig);

export const getFirebase = () => {
  return app;
};

export const getFirestore = () => {
  return firebase.firestore(app);
};
