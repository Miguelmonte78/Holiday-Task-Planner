// Firebase config - Keep this private!
const firebaseConfig = {
    apiKey: "AIzaSyAGo1LT6jVpvrGT8n63BQcxg01JURsGA_w",
    authDomain: "familyholidayplanner-1a80f.firebaseapp.com",
    projectId: "familyholidayplanner-1a80f",
    storageBucket: "familyholidayplanner-1a80f.appspot.com",
    messagingSenderId: "865089162879",
    appId: "1:865089162879:web:ac407bacf75d4ebbb4b94a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
