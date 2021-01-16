import React from 'react'
import ReactDOM from 'react-dom'
import firebase from 'firebase/app'
import 'firebase/firestore'
import Routes from './router'

const firebaseConfig = {
  apiKey: 'AIzaSyC8se3AfIEB0aAHqGyAWqxey3-tHd8B88k',
  authDomain: 'space-school-25fcb.firebaseapp.com',
  projectId: 'space-school-25fcb',
  storageBucket: 'space-school-25fcb.appspot.com',
  messagingSenderId: '449981809902',
  appId: '1:449981809902:web:8c3d79d0a01b7ddf0b9fff',
  measurementId: 'G-TLKTK1M1V7'
}

firebase.initializeApp(firebaseConfig)

ReactDOM.render(<Routes />, document.getElementById('root'))
