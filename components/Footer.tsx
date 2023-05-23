import React from 'react'
import { motion } from 'framer-motion'
import localFont from "@next/font/local";
const zigfont = localFont({ src: "../public/fonts/zigfont.ttf" });

type Props = {
    setAnswer:any,
   setInput:any

}

const Footer = (props: Props) => {
  return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, type: "spring", delay: 1 }}
        className={`${zigfont.className} z-20 bottom-3 left-0 right-0 sm:mx-1 flex flex-wrap flex-row justify-center space-x-4 sm:space-x-10 text-gray-400 drop-shadow-[0_1.2px_1.2px_rgba(1,1,1,1)] absolute `}
      >
        <p
          className="hover:text-white hover:scale-[1.05] hover:drop-shadow-2xl cursor-pointer "
          onClick={() => {
            props.setAnswer(
              `1-Type a question (ex- what is love?)\n\n2-Select Source \n\n3-Select Response Language \n\n4-Click Generate button \n\n5-Wait for response`
            );
            props.setInput("");
          }}
        >
          How to Use
        </p>
        <p
          className="hover:text-white hover:scale-[1.05] hover:drop-shadow-2xl cursor-pointer"
          onClick={() => {
            props.setAnswer(
              "All the responses are generated by AI(ChatGPT Turbo-3.5).\nThe validity/accuracy of any response cant be guaranteed by me.\nThe use of Spiritual GPT is entirely at the user's own risk.\nI will not be held liable for any damages or losses resulting from the use of this app, \nincluding but not limited to, direct, indirect, incidental, or consequential damages.\nBy using Spiritual GPT, you acknowledge and agree to these terms and conditions."
            );
            props.setInput("");
          }}
        >
          disclaimer
        </p>
        <p
          className="hover:text-white hover:scale-[1.05] hover:drop-shadow-2xl cursor-pointer"
          onClick={() => {
            props.setAnswer(
              `Email: sunilbandwork@gmail.com\nLinkedIn: www.linkedin.com/in/sunil-band/\nGithub: github.com/sunilband\nPortfolio: sunilband.netlify.com`
            );
            props.setInput("");
          }}
        >
          contact
        </p>
      </motion.div>
  )
}

export default Footer