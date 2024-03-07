import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import s from './Layout.module.css'

const Layout = () => {
  return (
    <div>
        <header className={s.wrapper}>
       <NavBar/>
          </header>
      <Suspense fallback={<h1>Loading...</h1>}>   <Outlet /></Suspense>    
   
    </div>
  )
}

export default Layout
