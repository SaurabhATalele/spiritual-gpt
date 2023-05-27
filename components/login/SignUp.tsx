import Image from "next/image";
import Link from "next/link";
import {auth,provider} from './middleware/firebase'
import { useRouter } from "next/router";
import { signInWithPopup,createUserWithEmailAndPassword } from "firebase/auth";
import { useEffect,useState,useRef } from "react";


type Props = {};
const SignUp = (props: Props) => {

  
  const [value,setValue] = useState("");
  const [match,setMatch] = useState("");
  const router = useRouter();
  const email = useRef("");
  const password = useRef("");
  const conPass = useRef("");



  const handleClick = () =>{
    
      signInWithPopup(auth,provider).then((data)=>{
        setValue(data.user.email);
        localStorage.setItem('email',data.user.email)
          // console.log(value);
          router.push('/')
          // console.log("Gaya")
          
  }).catch((err)=>{
    console.log("Error occured",err);
    
});
   
   
  }

  const HandleEmailSignUp = () =>{
    if(password.current.value === conPass.current.value){
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    
    alert("Successfully registered...")
    router.push("/login")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setMatch(errorMessage)
    // ..
  });
    }
    else{
      setMatch("Passwords are not matching!!!")
    }
    

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
    <div className=" w-screen h-screen flex flex-col items-center justify-center bg-[#343541] z-20 overflow-hidden blurcontainer px-4 blurcontainer">
      <div className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-6 card rounded-md flex flex-col items-center">
        

        <input
        ref={email}
          className="mb-6 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-900 rounded border focus:border-teal-500"
          type="text"
          placeholder="Email"
          required
        />

        <input
        ref={password}
          className="mb-6 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-900 rounded border focus:border-teal-500"
          type="password"
          placeholder="Password"
          required
        />

        <input
          className="mb-6 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-900 rounded border focus:border-teal-500"
          type="password"
          ref={conPass}
          placeholder="Confirm Password"
          required
        />

        <p className="text-red-400 mb-6">{match}</p>

        <div className="w-full flex items-center justify-center">
          <button
          onClick={HandleEmailSignUp}
            className=" w-1/2 bg-gray-800 text-white p-2 rounded font-semibold hover:bg-gray-900 "
            type="submit"
          >
            Sign Up
          </button>
        </div>
      {/* </div>
      <div className="text-right w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-6 "> */}
        <p className="my-3 text-slate-200  text-center ">OR</p>

        <div
        onClick={handleClick}
        className="w-full sm:w-1/2 google-login flex gap-3 form-input items-center justify-center mb-10 bg-white rounded-md px-5 py-2 ">
          <Image
            loader={loader}
            src={"image.png"}
            width={20}
            height={20}
            alt="loader"  
          ></Image>
          <p className="text-blue-500 cursor-pointer"> Sign up with Google</p>
        </div>

        <p className="text-center text-slate-200 text-sm flex gap-2 justify-center ">
          Already have an account?{" "}
          <Link href="/login" className="text-green-500">
            Login
          </Link>
        </p>
      </div>

      <div className="flex justify-center w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12">
        <p className="font-semibold text-gray-600 text-sm" />
      </div>
    </div>
  );
};

export default SignUp;
