import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyA3yUdzEdF9sBLQY8iprEhupV5Wsc5akJU',
  authDomain: 'chatapp-ccc81.firebaseapp.com',
  projectId: 'chatapp-ccc81',
  storageBucket: 'chatapp-ccc81.appspot.com',
  messagingSenderId: '890004423751',
  appId: '1:890004423751:web:3b5c99a35c929abaed5d62'
}
const firebaseApp = initializeApp(firebaseConfig)
const firebaseDB = getFirestore(firebaseApp)
export { firebaseDB }
