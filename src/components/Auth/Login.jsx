import React, { useState } from 'react'

const Login = ({handelLogin}) => {

  
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
const submitHandler =(e)=>{
  console.log("Sumitted")
  e.preventDefault()
   handelLogin(email,password)
  setEmail('')
  setPassword('')
  console.log("email is",email)
  console.log("password is",password)
  
 
  
}


  return (
    <div className=' flex items-center justify-center min-h-screen  bg-gradient-to-br from-[#000000] via-[#0a0a14] to-[#1a1a2e] '>
      <div className=' bg-[#0c0c10]/70 backdrop-blur-xl border border-gray-800/80 rounded-3xl p-10 
    shadow-[0_0_45px_-12px_rgba(124,92,255,0.5)] hover:shadow-[0_0_65px_-10px_rgba(124,92,255,0.65)] 
    transition-all duration-500 ease-out h-90 hover:scale-[1.3] w-80'>
        <form onSubmit={(e)=>{
          submitHandler(e)
        }} className='flex flex-col justify-center items-center h-full'>
            <h1 className='p-2 font-bold text-3xl bg-clip-text text-transparent bg-gradient-to-b from-purple-400 via-indigo-400 to-pink-400'>Login</h1>
          <input required value={email} onChange={(e)=>{
              setEmail(e.target.value)
              console.log(e.target.value)
            }} className='bg-white m-3 py-1.5 px-3 rounded' type="email"placeholder='Email' /> <i className="ri-user-2-fill fixed top-33 right-1 left-58  text-2xl "></i> 
            <input required value={password} onChange={(e)=>{
              setPassword(e.target.value)
              console.log(e.target.value)
            }} className='bg-white m-3 py-1.5 px-3 rounded' type="password" placeholder='Password' /> <i class="ri-lock-password-fill fixed top-48 right-1 left-58  text-2xl "></i>
            <button className='text-white m-3 bg-indigo-900 font-bold px-6 py-2 rounded bg-blue-950 shadow-lg shadow-blue-500/50 hover:bg-indigo-600' >Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
