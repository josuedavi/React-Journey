import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyAAMF7q5slw8f-ApHQMAix48zpn5xx64wc",
    authDomain: "login-6f57c.firebaseapp.com",
    projectId: "login-6f57c",
    storageBucket: "login-6f57c.appspot.com",
    messagingSenderId: "796962259854",
    appId: "1:796962259854:web:2b3e313be5ae29791a5adf"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;