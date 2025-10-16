import React from 'react'
import Header from '../others/header'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'

const AdminDashboard = () => {
  
  return (
    <div className='min-h-screen bg-gradient-to-br from-[#000000] via-[#0a0a14] to-[#1a1a2e] text-white '>
      <Header/>
      <CreateTask/>
      <AllTask/>
    </div>
  )
}

export default AdminDashboard
