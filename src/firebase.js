import firebase from "firebase";

const config = {
  apiKey: "AIzaSyBXOCqyss-fB07p7vd-zYGsET3642c93Qk",
  authDomain: "portfolio-53c6c.firebaseapp.com",
  databaseURL: "https://portfolio-53c6c.firebaseio.com",
  projectId: "portfolio-53c6c",
  storageBucket: "portfolio-53c6c.appspot.com",
  messagingSenderId: "510914382976"
};
firebase.initializeApp(config);
export default firebase;
