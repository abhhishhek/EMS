import React from 'react'

const Navbar = () => {
  return (
    <navbar className='flex flex-row p-4 shadow-lg rounded-b-lg bg-slate-700 text-white mt-[-20px] rounded-lg'>
        <div className='w-1/3 font-bold'>
            EMS
        </div>
        <div className='w-2/3 flex flex-row justify-between'>
            <div className=''>Welcome</div>
            <button className='bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105'>Login</button>
        </div>
        </navbar>     
  )
}

export default Navbar
