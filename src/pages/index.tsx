import Heading from "../../components/Heading"
import Main from "../../components/Main"
import Background from "../../components/Background"
import Favicon from "react-favicon";
import Head from 'next/head';
import { auth } from "../../components/login/middleware/firebase";
import { useEffect,useState } from "react";
import { useRouter } from "next/router";
import { onAuthStateChanged } from "firebase/auth";



export default function Home() {
  const [value,setValue] = useState("");
  const router = useRouter();
  const [user,setUser] = useState(null)

const getUser = () =>{
  setValue(localStorage.getItem("email"))
}

  useEffect(()=>{
   onAuthStateChanged(auth,(User)=>{

          if(User){
            setUser(User)
            console.log(User.displayName);
             
          }

          else{
            console.log("hello");
            
            router.push("/login")
          }
    })
  },[])
    
 
  return (
    <div className="h-screen w-screen bg-[#343541] overflow-hidden ">
      <Head>
      <title>Spiritual-GPT</title>
      <meta name="robots" content="spiritual gpt,spiritual,gpt,spiritual guidance,religious guidance,ai guidance,chatgpt,AI project,ai religion,religious knowledge,islamic knowledge,hindu knowledge,christian knowledge,christian guidance,hindu guidance,islamic guidance " />
      </Head>
      <Favicon url={["https://img.icons8.com/ios-filled/512/pranava.png","https://cdn-icons-png.flaticon.com/512/100/100491.png","https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Christian_cross.svg/1200px-Christian_cross.svg.png"]} />
      <div className="scale-95 sm:scale-100">
        {/* <LoginMain/> */}
      <Background/>
      <Heading/> 
      <Main/>
      </div>
      
    </div>
  )
}
