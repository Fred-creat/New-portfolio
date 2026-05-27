import { Link } from 'react-router-dom'
import { HeroActions, HeroContainer, HeroImage, HeroText } from './styles'
import Logo from '../../assets/foto-fred.png'

function Hero() {
  return (
    <HeroContainer>
      <HeroText>
        <span>Desenvolvedor Front-end</span>
        <h1>Olá, eu sou Fredson Maikon.</h1>
        <p>
          Crio aplicações modernas, performáticas e escaláveis com React,
          React Native e JavaScript. Gosto de transformar ideias em experiências
          digitais claras, bonitas e fáceis de usar.
        </p>

        <HeroActions>
          <Link to="/projects">Ver projetos</Link>
          <Link to="/contact">Falar comigo</Link>
        </HeroActions>
      </HeroText>

      <HeroImage>
        <img src={Logo} alt="Fredson Maikon" loading="eager" />
      </HeroImage>
    </HeroContainer>
  )
}

export default Hero
