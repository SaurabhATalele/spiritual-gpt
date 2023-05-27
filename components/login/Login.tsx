import React, { useEffect, useState,useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {auth,provider} from './middleware/firebase'
import { signInWithPopup,signInWithEmailAndPassword } from "firebase/auth";
// import { redirect } from 'next/navigation';
import { useRouter } from "next/router";
import { log } from "console";


type Props = {};
export const Login = (props: Props) => {

const [value,setValue] = useState("");
const router = useRouter();
const email = useRef("");
const password = useRef("");
const remember = useRef("");



  const handleGoogle = () =>{
    
      signInWithPopup(auth,provider).then((data)=>{
        setValue(data.user.email);
        localStorage.setItem('email',data.user.email)
          console.log(data.user.displayName);
          router.push('/')
          // console.log("Gaya")
          
  }).catch((err)=>{
    console.log("Error occured",err);
    
});
   
   
  }



  const HandleEmailSignIn = () =>{
    // console.log(remember.current.checked);
    

    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      if(remember.current.checked == true){
        localStorage.setItem("email",user.email)
      }
      setValue(user.email)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
    });
  
  } 

  useEffect(()=>{
   
    setValue(localStorage.getItem("email"))
    if(value){
      router.push('/')
    }
  })
    
  const loader = () => {
    return "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png";
  };
  return (
    <div className=" w-screen h-screen flex flex-col items-center justify-center bg-[#343541] z-20 overflow-hidden blurcontainer px-4 ">

      <div className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-6 card rounded-md flex flex-col">
        <input
        ref={email}
          className="mb-6 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-900 rounded border focus:border-teal-500"
          type="email"
          placeholder="Email"
        />
        <input
        ref={password}
          className="mb-6 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-900 rounded border focus:border-teal-500"
          type="password"
          placeholder="Password"
        />

        <div className="flex w-full items-center ">
          <div className="w-1/2 flex items-center text-white">
            <input id="remember-me" ref={remember} type="checkbox" className="mt-1 mr-2" />
            <label htmlFor="remember-me" >Remember me!</label>
          </div>
          <button
          onClick={HandleEmailSignIn}
            className="ml-auto w-1/2 bg-gray-800 text-white p-2 rounded font-semibold hover:bg-gray-900"
            type="submit"
          >
            Log In
          </button>
        </div>
     
      
      <p className="my-3 text-center text-slate-200 ">OR</p>

<div onClick={handleGoogle} className="google-login flex gap-3 form-input items-center justify-center mb-10 bg-white rounded-md px-5 py-2 ">
    <Image loader={loader} src={'image.png'} width={20} height={20} alt="loader"></Image>
    <p className="text-blue-500  cursor-pointer"> Sign in with Google</p>
</div>

<p className=" w-full  text-center text-slate-200 text-sm flex gap-2 justify-center ">Dont have an account?   <Link href="/signup" className="text-green-500">SignUp</Link></p>
     
      
      
      </div>
      <div className="flex justify-center w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12">
        <p className="font-semibold text-gray-600 text-sm" />
      </div>
    </div>
  );
};
