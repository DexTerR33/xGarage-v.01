$(document).ready(function() {
    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "#",
        authDomain: "#",
        databaseURL: "#",
        projectId: "#",
        storageBucket: "#",
        messagingSenderId: "#",
        appId: "#"
    };
    // Initialize Firebase

    firebase.initializeApp(firebaseConfig);;

    //create firebase database reference
    var dbRef = firebase.database();
    var contactsRef = dbRef.ref('contactsData');

    //load older conatcts as well as any newly added one...

});