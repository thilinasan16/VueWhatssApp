import { getAuth, signOut, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { collection, addDoc, doc, setDoc } from 'firebase/firestore'
import { firebaseDB } from '@/firebase'

const provider = new GoogleAuthProvider()

const User = {
  state: {
    currentUser: null,
    isLoggedIn: false
  },
  mutations: {
    SET_USER(state: { currentUser: any | null }, payload: any | null) {
      state.currentUser = payload
    },
    SET_LOGGED_IN(state: { isLoggedIn: boolean }, payload: boolean) {
      state.isLoggedIn = payload
    }
  },
  actions: {
    SET_USER(context: any) {
      const auth = getAuth()
      const db = firebaseDB
      signInWithPopup(auth, provider)
        .then((result) => {
          const user = result.user
          const currentUser = {
            uid: user.uid,
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
            phoneNumber: user.phoneNumber
          }
          try {
            setDoc(doc(db, 'users', user.uid), currentUser)
            context.commit('SET_USER', currentUser)
            context.commit('SET_LOGGED_IN', true)
          } catch (e) {
            console.error(e)
          }
        })
        .catch((error) => {
          console.error(e)
        })
    },
    LOGOUT(context: any) {
      const auth = getAuth()
      signOut(auth)
        .then(() => {
          context.commit('SET_USER', null)
          context.commit('SET_LOGGED_IN', false)
        })
        .catch((error) => {
          console.error(e)
        })
    }
  }
}

export default User
