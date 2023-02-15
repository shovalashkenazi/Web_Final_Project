const { initializeApp } = require("firebase-admin/app");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDorWSVMcbQBu6rABfI6NHWR7q7lJ3QsM8",
  authDomain: "shop-f7de5.firebaseapp.com",
  projectId: "shop-f7de5",
  storageBucket: "shop-f7de5.appspot.com",
  messagingSenderId: "981101758208",
  appId: "1:981101758208:web:4b23f9ff627ea1fd7155e5",
  measurementId: "G-KHQ0E7VX9T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

module.exports = { app };
