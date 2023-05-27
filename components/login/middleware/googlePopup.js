import {auth,provider} from './firebase'
import { signInWithPopup } from "firebase/auth";




const handleSignIn = () =>{
    var email = ""
    signInWithPopup(auth,provider).then((data)=>{
    //   setValue(data.user.email);
      localStorage.setItem('email',data.user.email)
        // console.log(value);
        email = data.user.email
        // console.log("Gaya")
        
}).catch((err)=>{
  console.log("Error occured",err);
  
});
 
 return email
}

export {handleSignIn}
