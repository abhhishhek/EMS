import React from 'react'

const Sidebar = () => {
  return (
    <div>
        <div className=''>
        <div className='font-bold text-white bg-slate-700 mt-2 py-2 rounded-lg mx-4 cursor-pointer hover:bg-slate-900 ' linkto='/Dashboard'>
            Dashboard
        </div>
        <div className='font-bold text-white bg-slate-700 mt-2 py-2 rounded-lg mx-4 cursor-pointer hover:bg-slate-900' linkto='/Employee'>
            Employee
        </div>
        <div className='font-bold text-white bg-slate-700 mt-2 py-2 rounded-lg mx-4 cursor-pointer hover:bg-slate-900' linkto='/Department'>
            Department
        </div>
        <div className='font-bold text-white bg-slate-700 mt-2 py-2 rounded-lg mx-4 cursor-pointer hover:bg-slate-900' linkto='/Leave'>
            Leave
        </div>
        <div className='font-bold text-white bg-slate-700 mt-2 py-2 rounded-lg mx-4 cursor-pointer hover:bg-slate-900' linkto='/Salary'>
            Salary
        </div>
        <div className='font-bold text-white bg-slate-700 mt-2 py-2 rounded-lg mx-4 cursor-pointer hover:bg-slate-900' linkto='Settings'>
            Settings
        </div>
        </div>
    </div>
    
  )
}

export default Sidebar
