import React from 'react'
import { NavLink } from 'react-router-dom'


const Header = () => {
  return (
    <header className="header">
      <NavLink exact className="mh3 pv2" to="/">JOKES</NavLink>
      <NavLink className="mh3 pv2" to="/live-coding">LIVE CODING</NavLink>
      <NavLink className="mh3 pv2" to="/other">OTHER PAGE</NavLink>
    </header>
  )
}

export default Header
