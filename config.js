import firebase from 'firebase';

// Agregar SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBfjMqhe2RsqfjqVYlyy1nfiwL7eqczgiU",
    authDomain: "nose-1e248.firebaseapp.com",
    projectId: "nose-1e248",
    storageBucket: "nose-1e248.appspot.com",
    messagingSenderId: "750810082163",
    appId: "1:750810082163:web:f9d789817661d6ad0d7306"
  };
// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
