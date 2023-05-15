//Import the funcions you need from the SDKs you nedd
import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import  Constants from "expo-constants";

const firebaseConfig= {
    apiKey: Constants.manifest.extra.apiKey,
    authDomain: Constants.manifest.extra.authDomain,
    projectId: Constants.manifest.extra.projectId,
    storageBucket: Constants.manifest.extra.storageBucket,
    messagingSenderId: Constants.manifest.extra.messagingSenderId, 
    appId: Constants.manifest.extra.appId,
    measurementId: Constants.manifest.extra.measurementId,
};
//Initialize Firebase
initializeApp(firebaseConfig);

// Export Firestore instance
export const baseDatos= getFirestore();


