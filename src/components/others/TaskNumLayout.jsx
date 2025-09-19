import React from 'react'

const TaskNumLayout = () => {
  return (
    <div className='flex justify-between h-60 ml-10 mt-2 mr-10 mt-0 gap-5'>
      <div className='bg-purple-600 h-40 w-1/2 rounded-3xl flex flex-col items-start px-14 font-black text-4xl justify-center shadow-lg shadow-purple-500/50 '>
        <h2>0</h2>
        <h2>New Task</h2>
      </div>
       <div className='bg-cyan-500  h-40 w-1/2 rounded-3xl flex flex-col items-start px-14 font-black text-4xl justify-center shadow-lg shadow-cyan-500/50 '>
        <h2>0</h2>
        <h2>New Task</h2>
      </div>
       <div className='bg-blue-600 h-40 w-1/2 rounded-3xl flex flex-col items-start px-14 font-black text-4xl justify-center shadow-lg shadow-blue-500/50 '>
        <h2>0</h2>
        <h2>New Task</h2>
      </div>
       <div className='bg-emerald-500  h-40 w-1/2 rounded-3xl flex flex-col items-start px-14 font-black text-4xl justify-center shadow-lg shadow-emerald-500/50 '>
        <h2>0</h2>
        <h2>New Task</h2>
      </div>
    </div>
  )
}

export default TaskNumLayout
