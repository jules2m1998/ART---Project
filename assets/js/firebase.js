import firebase from 'firebase'
import 'firebase/firestore'
import firebaseConfig from './firebaseConfig'
export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()
