import firebase from 'firebase/app';
import 'firebase/storage';
import firestore from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyApmtY-HSVw86SHzrqn88ZkGOsvGuHL-UU",
//   authDomain: "pamsetembro-9ec4c.firebaseapp.com",
//   databaseURL: "https://pamsetembro-9ec4c-default-rtdb.firebaseio.com",
//   projectId: "pamsetembro-9ec4c",
//   storageBucket: "pamsetembro-9ec4c.appspot.com",
//   messagingSenderId: "1030734576501",
//   appId: "1:1030734576501:web:85620e4467a2337f10b13c",
//   measurementId: "G-NW088PY0SF"
// };

const firebaseConfig = {
  apiKey: "AIzaSyCs1xy70Psh4FZpEh_m1rVLsLHprNr9e-g",
  authDomain: "pamset-5443d.firebaseapp.com",
  projectId: "pamset-5443d",
  storageBucket: "pamset-5443d.appspot.com",
  messagingSenderId: "44404538372",
  appId: "1:44404538372:web:f1708759635a5500d40951"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;





// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyApmtY-HSVw86SHzrqn88ZkGOsvGuHL-UU",
//   authDomain: "pamsetembro-9ec4c.firebaseapp.com",
//   databaseURL: "https://pamsetembro-9ec4c-default-rtdb.firebaseio.com",
//   projectId: "pamsetembro-9ec4c",
//   storageBucket: "pamsetembro-9ec4c.appspot.com",
//   messagingSenderId: "1030734576501",
//   appId: "1:1030734576501:web:85620e4467a2337f10b13c",
//   measurementId: "G-NW088PY0SF"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);