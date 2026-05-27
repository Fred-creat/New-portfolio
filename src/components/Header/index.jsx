import React from 'react'
import { NavLink } from 'react-router-dom'
import { Brand, HeaderContainer, Nav } from './styles'

function Header() {
  return (
    <HeaderContainer>
      <Brand to="/" aria-label="Ir para a página inicial">
        Fredson Maikon
      </Brand>

      <Nav aria-label="Navegação principal">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">Sobre</NavLink>
        <NavLink to="/projects">Projetos</NavLink>
        <NavLink to="/contact">Contato</NavLink>
      </Nav>
    </HeaderContainer>
  )
}

export default Header
