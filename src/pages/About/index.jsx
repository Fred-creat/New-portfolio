import {
  AboutContainer,
  AboutText,
  CapabilityGrid,
  CapabilityItem,
  ClosingText,
  Intro,
  Section,
  TechList,
} from './styles'

const capabilities = [
  'Plataformas de automação para WhatsApp com inteligência artificial',
  'Aplicações SaaS multi-tenant',
  'Sistemas de mensagens em tempo real',
  'Plataformas de gestão empresarial',
  'Aplicativos mobile com React Native',
  'Soluções de automação personalizadas para empresas',
]

const technologies = [
  'TypeScript',
  'JavaScript (ES6+)',
  'React',
  'Next.js',
  'React Native',
  'Node.js',
  'Express',
  'Prisma',
  'PostgreSQL',
  'REST APIs',
  'Git & GitHub',
  'Integração com IA (LLMs)',
  'Arquitetura SaaS',
  'Aplicações em tempo real',
]

function About() {
  return (
    <AboutContainer>
      <AboutText>
        <Intro>
          <span>Sobre mim</span>
          <h1>Engenheiro de Software construindo produtos escaláveis com JavaScript moderno.</h1>
          <p>
            Sou focado no desenvolvimento de aplicações web escaláveis, soluções com
            inteligência artificial e produtos SaaS. Tenho especialidade em TypeScript,
            React, Next.js, Node.js, React Native, Prisma, PostgreSQL, APIs REST e
            integrações com IA.
          </p>
        </Intro>

        <Section>
          <div>
            <span>O que eu construo</span>
            <h2>Produtos de software completos, da ideia à produção.</h2>
          </div>
          <CapabilityGrid>
            {capabilities.map((capability, index) => (
              <CapabilityItem key={capability}>
                <small>{String(index + 1).padStart(2, '0')}</small>
                <p>{capability}</p>
              </CapabilityItem>
            ))}
          </CapabilityGrid>
        </Section>

        <Section>
          <div>
            <span>Visão de engenharia</span>
            <h2>Meu trabalho vai além de escrever código.</h2>
          </div>
          <div>
            <p>
              Gosto de compreender problemas de negócio, projetar arquiteturas escaláveis,
              melhorar a experiência do usuário e construir produtos que gerem valor mensurável.
            </p>
            <p>
              Estudo continuamente Engenharia de Software, System Design, Inteligência
              Artificial, Clean Architecture, otimização de performance e tecnologias em
              nuvem para entregar software de alta qualidade seguindo as melhores práticas
              do mercado.
            </p>
          </div>
        </Section>

        <Section>
          <div>
            <span>Principais tecnologias</span>
            <h2>As ferramentas por trás do meu trabalho.</h2>
          </div>
          <TechList aria-label="Principais tecnologias">
            {technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </TechList>
        </Section>

        <ClosingText>
          <span>Aberto a oportunidades internacionais</span>
          <h2>Vamos construir software que gere impacto real.</h2>
          <p>
            Busco oportunidades internacionais e remotas nas quais eu possa contribuir com
            equipes de engenharia de alto impacto, enquanto continuo evoluindo como Engenheiro
            de Software Full Stack. Tenho sempre interesse em desafios complexos de engenharia,
            produtos inovadores e oportunidades de criar soluções que façam a diferença.
          </p>
        </ClosingText>
      </AboutText>
    </AboutContainer>
  )
}

export default About
