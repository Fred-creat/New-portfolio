import { AboutContainer, AboutText, HighlightList } from './styles'

function About() {
  return (
    <AboutContainer>
      <AboutText>
        <span>Sobre mim</span>
        <h1>Front-end com foco em interfaces úteis, responsivas e bem cuidadas.</h1>
        <p>
          Desenvolvedor front-end com experiência prática na criação de aplicações
          web e mobile, focado em React, React Native e JavaScript moderno.
        </p>
        <p>
          Tenho paixão por transformar ideias em soluções digitais eficientes e
          intuitivas, sempre buscando aprimorar minhas habilidades e acompanhar
          boas práticas do mercado.
        </p>

        <HighlightList>
          <li>Aberto a oportunidades remotas no Brasil e exterior.</li>
          <li>Experiência com React, Vite, Styled Components e React Native.</li>
          <li>Interesse em produtos digitais com boa usabilidade e performance.</li>
        </HighlightList>
      </AboutText>
    </AboutContainer>
  )
}

export default About
