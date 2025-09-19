import React from 'react'

const CreateTask = () => {
  return (
    <div className='m-2'>
        {/* <h1 className='font-bold text-2xl'>Create Task</h1> */}
        <form className='flex items-start p-6 justify-between mr-2 mt-3 ml-2 h-80 '>
          <div>
              <div>
        <h5 className='mb-1'>Task Tittle</h5>
        <input  placeholder=' Make a ui design' className='  border-2 border-zinc-400 w-100  text-zinc-200 rounded-lg' type="text" />
      </div>
      <div>
        <h5 className='mt-4 mb-1'>Date</h5>
        <input type="date" className='border-2 border-zinc-400 w-100 rounded-lg text-zinc-400' />
        </div>
        <div>
        <h5 className='mt-4 mb-1'>Assign To</h5>
        <input type="text" placeholder=' Employee Name' className='border-2 border-zinc-400 w-100 rounded-lg text-zinc-400 '/>
        </div>

       <div>
        <h5 className='mt-4 mb-1'>Category</h5>
        <input className='  border-2 border-zinc-400 w-100 rounded-lg text-zinc-400 text-black'  text-black placeholder=' Design,Development,etc...' type="text" />
     </div>
          </div>
      <div className=' w-1/2 h-70 flex items-start justify-center flex-col'>
         
        <h5 className='mb-2'>Description</h5>
        <textarea className=' border-2 border-zinc-400 w-100 rounded-lg  text-zinc-400 text-black h-50 w-148  ' name="" placeholder='Detailed description' id=""></textarea>
         
      <div className='mt-2'>
        <button className='bg-emerald-600 p-1 rounded w-148'>Create Task</button>
        </div>
       
      </div>
      
       
        
      
        </form>
      </div>
  )
}

export default CreateTask
