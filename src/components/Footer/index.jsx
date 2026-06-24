import { FooterContainer, FooterText } from './styles'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <FooterContainer>
      <FooterText>© {year} Fredson Maikon. Feito com React e boas ideias.</FooterText>
      <nav aria-label="Redes sociais">
        <a href="https://github.com/fred-creat" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/fredsonlemos" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="mailto:fredsonsouzalemos@gmail.com">E-mail</a>
      </nav>
    </FooterContainer>
  )
}

export default Footer
