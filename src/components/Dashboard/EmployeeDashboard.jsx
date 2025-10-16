import React from 'react'
import Header from '../others/header'
import TaskNumLayout from '../others/TaskNumLayout'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = () => {

  return (
    <div className='min-h-screen bg-gradient-to-br from-[#000000] via-[#0a0a14] to-[#1a1a2e] text-white '>
      <div>
      <Header/>
<TaskNumLayout />
<TaskList/>
      </div>
    </div>
  )
}

export default EmployeeDashboard
