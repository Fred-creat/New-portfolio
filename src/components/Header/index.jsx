import React from 'react'
import { NavLink } from 'react-router-dom'
import { Brand, HeaderContainer, Nav } from './styles'

function Header() {
  return (
    <HeaderContainer>
      <Brand to="/" aria-label="Ir para a página inicial">
        Fredson<span>.</span>
      </Brand>

      <Nav aria-label="Navegação principal">
        <NavLink to="/">Início</NavLink>
        <NavLink to="/about">Sobre</NavLink>
        <NavLink to="/projects">Projetos</NavLink>
        <NavLink className="contact-link" to="/contact">Vamos conversar</NavLink>
      </Nav>
    </HeaderContainer>
  )
}

export default Header
