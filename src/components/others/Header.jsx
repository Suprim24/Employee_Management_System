import React from 'react'

const Header = () => {

  return (
    <div className='flex items-end justify-between p-7'>
      <h1 className='font-light text-xl'>नमस्ते<br /> <span className='font-extrabold text-3xl'>Suprim🙏</span> </h1>
      <button className='bg-red-800 px-3 py-1 rounded shadow-lg shadow-red-500/50 hover:bg-red-500'>Log Out</button>
    </div>
  )
}

export default Header
