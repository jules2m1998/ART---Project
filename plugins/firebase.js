import firebase from 'firebase/app'
import 'firebase/firestore'
if (!firebase.apps.length) {
  const config = {
    apiKey: 'AIzaSyBSptogZEaSuaKjNITy7ufAKsABjPCSW6Q',
    authDomain: 'http-client-demo-9f06c.firebaseapp.com',
    databaseURL: 'https://http-client-demo-9f06c.firebaseio.com',
    projectId: 'http-client-demo-9f06c',
    storageBucket: 'http-client-demo-9f06c.appspot.com',
    messagingSenderId: '153251654322',
    appId: '1:153251654322:web:8202869a40ba74f2'
  }
  firebase.initializeApp(config)
  firebase.firestore().settings({ timestampsInSnapshots: true })
}
const fireDb = firebase.firestore()
