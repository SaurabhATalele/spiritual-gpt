import { initializeApp,getApps} from 'firebase/app';
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import { getDatabase } from "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration



const FirebaseCredentials = {
    apiKey: "AIzaSyDhdtlCuFcFBjRAoLqcOQ6-zWj8jdcT8dU",
    authDomain: "spiritual-gpt.firebaseapp.com",
    projectId: "spiritual-gpt",
    projectName:"spritual-gpt"
    }

    var app = null
    if(!getApps.length){
         app =  initializeApp(FirebaseCredentials);
    }
    else{
        app = getApps
    }
    



const auth= getAuth(app)
const database = getDatabase(app);


const provider = new GoogleAuthProvider();

export {auth,provider,database};