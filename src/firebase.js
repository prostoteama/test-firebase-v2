import firebase from 'firebase'

firebase.initializeApp({
    apiKey: "AIzaSyA2G9RKQxK2VPlXOQv4YPvcCUrMEWNl6-w",
    authDomain: "test-firebase-chat-e1aaa.firebaseapp.com",
    databaseURL: "https://test-firebase-chat-e1aaa.firebaseio.com",
    projectId: "test-firebase-chat-e1aaa",
    storageBucket: "test-firebase-chat-e1aaa.appspot.com",
    messagingSenderId: "461062312397",
    appId: "1:461062312397:web:9585df8ae7bad931b77484"
})

const db = firebase.firestore()

export default db