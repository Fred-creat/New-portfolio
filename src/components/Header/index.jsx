import React from 'react'
import { NavLink } from 'react-router-dom'
import { HeaderContainer, Nav } from './styles'

function Header() {
  return (
    <HeaderContainer>
      <h1>Fredson Maikon</h1>

      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </Nav>
    </HeaderContainer>
  )
}

export default Header
