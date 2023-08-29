import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAN1x6owc4s8vjq3A17LmWfn_HUxNCf6dI",
    authDomain: "udemy-vue-firbase.firebaseapp.com",
    projectId: "udemy-vue-firbase",
    storageBucket: "udemy-vue-firbase.appspot.com",
    messagingSenderId: "351237742715",
    appId: "1:351237742715:web:5ab85c7428b51a685a82de"
  };

  //init firebase
  firebase.initializeApp(firebaseConfig)

  const projectAuth = firebase.auth()

  const projectFirestore = firebase.firestore()
  
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export { projectAuth, projectFirestore, timestamp }