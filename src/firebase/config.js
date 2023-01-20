import firebase from 'firebase/app' //node_modulesからコアとなるfirebaseのパッケージをimportする、firebaseを使うなら必ずimportする必要がある
import 'firebase/firestore' // firestoreを使いたいのでimportする
import 'firebase/auth'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCp_n6Jutiv-zGm6ECVrIPLgsyFBYLFFhk",
  authDomain: "cgp-pl-kc-roulette.firebaseapp.com",
  projectId: "cgp-pl-kc-roulette",
  storageBucket: "cgp-pl-kc-roulette.appspot.com",
  messagingSenderId: "917564040992",
  appId: "1:917564040992:web:d5f8cf54fc4079e0c95945",
  measurementId: "G-FGH2BVB9RB"
};


// init firebase
firebase.initializeApp(firebaseConfig) // バックエンドのfirebaseを初期化する

// init firestore service
const projectFirestore = firebase.firestore() // firebaseのサービスも初期化する
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

const timestamp = firebase.firestore.FieldValue.serverTimestamp //firebaseのtimestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }