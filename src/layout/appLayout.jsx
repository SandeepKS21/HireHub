import LandingPage from '@/pages/Landing'
import React from 'react'
import { Outlet } from 'react-router-dom'
import '../App.css'
import Header from '@/components/Header'

const AppLayout = () => {
  return (
    <div className=''>
      <div className='grid-background'></div>


      <main className='min-h-screen container mx-auto px-4'>
        <Header />
        <Outlet />
      </main>

      <div className='p-5 text-center bg-gray-800 mt-10'>Made by Sandeep Kumar Singh</div>
    </div>

  )
}

export default AppLayout
