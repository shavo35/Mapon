firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // [START_EXCLUDE]
    if (errorCode == 'auth/weak-password') {
      alert('The password is too weak.');
    } else {
      alert(errorMessage);
    }
    console.log(error);
    // [END_EXCLUDE]
  });

  // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyCvyBJPzUf_HvEfFC4c9GiPKLcNikcyymw",
      authDomain: "mapoide-bb1f3.firebaseapp.com",
      databaseURL: "https://mapoide-bb1f3.firebaseio.com",
      projectId: "mapoide-bb1f3",
      storageBucket: "mapoide-bb1f3.appspot.com",
      messagingSenderId: "903806819",
      appId: "1:903806819:web:c038638424d587ddd5dd56",
      measurementId: "G-0NHYCZ5CJ4"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
 