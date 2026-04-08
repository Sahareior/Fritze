import React from 'react'
import Navbar from '../LandingPage/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

const MainpageNavigationLayout = () => {
  return (
    <div>
        <Navbar />
        <Outlet />
    </div>
  )
}

export default MainpageNavigationLayout