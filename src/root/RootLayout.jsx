import React from 'react'
import {Outlet} from 'react-router-dom'
import TopBar from '../components/TopBar'
import LeftSideBar from '../components/LeftSideBar'
import BottomBar from '../components/BottomBar'

function RootLayout() {
  return (
    <div className = "w-full md:flex">
        <TopBar />
        <LeftSideBar />
        <section className = "flex flex-1 h-full text-white bg-zinc-800">
        <Outlet />
        </section>
        <BottomBar />
    </div>
  )
}

export default RootLayout