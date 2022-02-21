import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp(
    {
      apiKey: "AIzaSyBbHFnokbxuj5idHDkIBiT6YNtAUsBz2J0",
      authDomain: "fir-pj2-d7839.firebaseapp.com",
      projectId: "fir-pj2-d7839",
      storageBucket: "fir-pj2-d7839.appspot.com",
      messagingSenderId: "808242408189",
      appId: "1:808242408189:web:5e3aece7fff5634f65ac94",
      measurementId: "G-Q2R8P646QN"
    }
  )
}

export default firebase