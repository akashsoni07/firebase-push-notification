import firebase from "firebase"

const config = {
    apiKey: "AIzaSyC1Uut_klkyt4RtwB7oWw-rcC0p9ouezNE",
    authDomain: "fir-push-notification-5d0d0.firebaseapp.com",
    projectId: "fir-push-notification-5d0d0",
    storageBucket: "fir-push-notification-5d0d0.appspot.com",
    messagingSenderId: "115596368214",
    appId: "1:115596368214:web:e7d0a173d654aaedbe9ef7"
}
firebase.initializeApp(config)

export default firebase