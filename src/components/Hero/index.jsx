import { Link } from 'react-router-dom'
import { Availability, HeroActions, HeroContainer, HeroImage, HeroText, Stack } from './styles'
import Logo from '../../assets/foto-fred.png'

function Hero() {
  return (
    <HeroContainer>
      <HeroText>
        <Availability>
          <i aria-hidden="true" /> Software Engineer · Full Stack · AI
        </Availability>
        <h1>Construo software que transforma <em>ideias em negócios.</em></h1>
        <p>
          Desenvolvo produtos SaaS, aplicações web e mobile, automações e soluções com
          inteligência artificial — da arquitetura à experiência final do usuário.
        </p>

        <HeroActions>
          <Link to="/contact">Quero construir um produto <span aria-hidden="true">→</span></Link>
          <Link to="/projects">Ver resultados</Link>
        </HeroActions>

        <Stack aria-label="Principais tecnologias">
          <span>TypeScript</span><span>Next.js</span><span>Node.js</span><span>AI · LLMs</span>
        </Stack>
      </HeroText>

      <HeroImage>
        <div>
          <img src={Logo} alt="Fredson Maikon, desenvolvedor full stack" loading="eager" />
        </div>
        <p><span>Baseado na Bahia</span><span>Brasil · remoto</span></p>
      </HeroImage>
    </HeroContainer>
  )
}

export default Hero
