import firebase from 'firebase'

var firebaseConfig = {
  apiKey: 'AIzaSyChqzj3Jv8e-d-TfypEqak38oPlXRzeRmM',
  authDomain: 'react-disney-plus-clone-fd9e6.firebaseapp.com',
  projectId: 'react-disney-plus-clone-fd9e6',
  storageBucket: 'react-disney-plus-clone-fd9e6.appspot.com',
  messagingSenderId: '453726471629',
  appId: '1:453726471629:web:aefede8dd7fb1213223084',
  measurementId: 'G-W9L21S5TC2'
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()

export { auth, provider, storage }
export default db
