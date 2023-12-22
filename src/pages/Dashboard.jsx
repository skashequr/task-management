import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='bg-gray-300'>
      <div className="max-w-7xl mx-auto md:grid md:grid-cols-12  ">
        {/* side bar */}
        <div className='bg-black text-white md:col-span-2 md:h-screen col-span-3 pl-3'>
          <ul className=' flex flex-col gap-2'>
          <li><NavLink to="/dashboard" className={({ isActive }) => isActive ? "border-b-2 border-red-600 text-white font-semibold" : ""}> Dashboard </NavLink></li>
          <li><NavLink to="/dashboard/mytasks" className={({ isActive }) => isActive ? "border-b-2 border-red-600 text-white font-semibold" : ""}>   My Task </NavLink></li>
          <li><NavLink to="/" className={({ isActive }) => isActive ? "border-b-2 border-red-600 text-white font-semibold" : ""}>  Home </NavLink></li>
          <li><NavLink to="/" className={({ isActive }) => isActive ? "border-b-2 border-red-600 text-white font-semibold" : ""}>  Home </NavLink></li>
          <li><NavLink to="/" className={({ isActive }) => isActive ? "border-b-2 border-red-600 text-white font-semibold" : ""}>  Home </NavLink></li>
          </ul>
        </div>
        {/* main content */}
        <div className="md:col-span-10 p-5 bg-gray-300">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Dashboard