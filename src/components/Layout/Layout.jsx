import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import s from './Layout.module.css'

const Layout = () => {
  return (
    <div>
        <header className={s.wrapper}>
       <NavBar/>
          </header>
          <Outlet/>
    </div>
  )
}

export default Layout
