import React from 'react'
import {  NavLink } from 'react-router-dom'
import s from './NavBar.module.css'

const Nav = () => {
  return (
     <nav>
          <ul className={s.navlist}>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/movies'>Movies</NavLink>
            </li>
          </ul>
        </nav>
  )
}

export default Nav
