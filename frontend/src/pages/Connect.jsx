import React, { useState } from 'react'
import Login from './Login'
import SignUp from './SignUp'
import Login_and_signup from "../components/Login_and_signup";
const Connect = ({visable,close}) => {
    const [isRegForm ,setIsRegForm]=useState(true)
  return (
    <>
    <Login_and_signup visable={visable} onClose={close}>
        <Login isLogin={isRegForm} toLoginForm={()=>setIsRegForm(!isRegForm)}/>
        <SignUp isSignup={isRegForm} toRegForm={()=>setIsRegForm(!isRegForm)}/>
    </Login_and_signup>
    </>
  )
}

export default Connect