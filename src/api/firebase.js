import firebase from "firebase/app"

import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyAjX679XPvxKmULQv_fvibyPZdAWtW307U",
    authDomain: "beeweb-test.firebaseapp.com",
    databaseURL: "https://beeweb-test.firebaseapp.com",
    projectId: "beeweb-test",
    storageBucket: "beeweb-test.appspot.com",
    messagingSenderId: "914373135228",
    appId: "914373135228:web:7421098b9a9279ae5cb2f9"
})

export const auth = app.auth()
export default app