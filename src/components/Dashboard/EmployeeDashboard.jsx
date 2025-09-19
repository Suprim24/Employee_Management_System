import React from 'react'
import Header from '../others/header'
import TaskNumLayout from '../others/TaskNumLayout'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = () => {

  return (
    <div className='min-h-screen bg-gradient-to-tr from-gray-900 via-gray-800 to-black text-gray-300'>
      <div>
      <Header/>
<TaskNumLayout />
<TaskList/>
      </div>
    </div>
  )
}

export default EmployeeDashboard
