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
    <div className=' flex items-center justify-center min-h-screen bg-gradient-to-tr from-gray-900 via-gray-800 to-black'>
      <div className=' bg-gradient-to-br from-gray-900 via-gray-800 to-black h-90 w-60 rounded-2xl  shadow-2xl shadow-cyan-500/50 '>
        <form onSubmit={(e)=>{
          submitHandler(e)
        }} className='flex flex-col justify-center items-center h-full'>
            <h1 className='p-2 font-bold text-3xl text-white'>Login</h1>
            <input required value={email} onChange={(e)=>{
              setEmail(e.target.value)
              console.log(e.target.value)
            }} className='bg-white m-3 py-1.5 px-3 rounded' type="email"placeholder='Email' />
            <input required value={password} onChange={(e)=>{
              setPassword(e.target.value)
              console.log(e.target.value)
            }} className='bg-white m-3 py-1.5 px-3 rounded' type="password" placeholder='Password' />
            <button className='text-white m-3 bg-indigo-900 font-bold px-6 py-2 rounded bg-blue-950 shadow-lg shadow-blue-500/50 hover:bg-indigo-600' >Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
