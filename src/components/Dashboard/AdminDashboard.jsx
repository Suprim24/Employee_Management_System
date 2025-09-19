import React from 'react'
import Header from '../others/header'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'

const AdminDashboard = () => {
  
  return (
    <div className='min-h-screen bg-gradient-to-tr from-gray-900 via-gray-800 to-black text-white '>
      <Header/>
      <CreateTask/>
      <AllTask/>
    </div>
  )
}

export default AdminDashboard
