import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

if(!firebase.apps.length){
  firebase.initializeApp({
    apikey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authdomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  }) 
}

export default firebase