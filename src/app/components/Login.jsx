import React from 'react'
import './login.css'
import Image from "next/image";


export default function Login() {
  return (
    // <div className='login'>
    //     <div className="loginForm">
    //         login form
    //     </div>

    //     <div className="loginImage">
    //         <Image className='formimage' src="/formImage.png" alt="img" width={700} height={500} />
    //         <p>here</p>
    //     </div>
    // </div>
    

   <div className='loginparentDev'>
     <div className="login">
      {/* Form Section */}
      
       <img className="logoImg" src="/logo.png" alt="Image" />
      <div className="loginForm">
      <h1>Sign in</h1>
        <p>Please login toc continue to your account.</p>
        <input type="email" placeholder="jonas_kahnwald@gmail.com" />
        <input type="password" placeholder="Password" />
        <label className='lable'>
          <input type="checkbox" /> Keep me logged in
        </label>
        <button className='Button'>Sign in</button>
        <div className='ScialLogin'>
        <p className='option'>or</p>
         <div className="socialbtns">
         <img className='googlebtn' src="/google.png" alt="Image" width={300}  />
         <img className='twitterbtn' src="/twitter.png" alt="Image" width={300}  />
         </div>
           <p>
          Need an account? <a href="#">Create one</a>
        </p>
      </div>
       </div>
      
        
      {/* Image Section */}
      <div className="loginImage">
        <img className='formSideImage' src="/formImage.png" alt="Image"  />
        <p>here</p>
      </div>
      </div>
     
   </div>
  )
}
