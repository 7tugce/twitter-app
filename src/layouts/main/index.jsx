import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../sidebar'
import RightBar from '../rightbar'

const MainLayout = () => {
  return (
    <div className='w-[1265px] mx-auto flex'>
 <Sidebar/>
  <main className='flex-1 flex gap-[30px]'>
  <main className='flex-1 border-x border-[#FFD0D0]'>
      <Outlet/>    
    </main>
    <RightBar/></main>
    
    </div>
  )
}

export default MainLayout