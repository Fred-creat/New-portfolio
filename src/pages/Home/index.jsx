import { Link } from 'react-router-dom'
import Hero from '../../components/Hero'
import ProjectCard from '../../components/ProjectCard'
import { featuredProjects } from '../../data/projects'
import {
  Container,
  ExpertiseGrid,
  ExpertiseItem,
  FeaturedGrid,
  ProofGrid,
  ProofItem,
  Section,
  SectionHeader,
} from './styles'

const expertise = [
  {
    number: '01',
    title: 'SaaS e inteligência artificial',
    text: 'Produtos multi-tenant, agentes de IA, automações e integrações que reduzem trabalho manual e aceleram operações.',
  },
  {
    number: '02',
    title: 'Web e mobile',
    text: 'Experiências rápidas e intuitivas com React, Next.js, React Native e TypeScript para web, Android e iOS.',
  },
  {
    number: '03',
    title: 'Engenharia de ponta a ponta',
    text: 'Arquitetura, APIs REST, tempo real, autenticação e bancos PostgreSQL preparados para acompanhar o crescimento do produto.',
  },
]

const proof = [
  { value: '8+', label: 'produtos no portfólio' },
  { value: 'Full stack', label: 'do banco à interface' },
  { value: 'Web · Mobile · AI', label: 'uma stack completa' },
]

export default function Home() {
  return (
    <Container>
      <Hero />

      <ProofGrid aria-label="Resumo da experiência">
        {proof.map((item) => (
          <ProofItem key={item.value}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </ProofItem>
        ))}
      </ProofGrid>

      <Section aria-labelledby="featured-title">
        <SectionHeader>
          <div>
            <span>Cases selecionados</span>
            <h2 id="featured-title">Engenharia aplicada a problemas reais de negócio.</h2>
          </div>
          <Link to="/projects">Ver todos os projetos <span aria-hidden="true">→</span></Link>
        </SectionHeader>

        <FeaturedGrid>
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </FeaturedGrid>
      </Section>

      <Section aria-labelledby="expertise-title">
        <SectionHeader>
          <div>
            <span>Como posso gerar valor</span>
            <h2 id="expertise-title">Uma stack moderna para construir, lançar e escalar.</h2>
          </div>
        </SectionHeader>

        <ExpertiseGrid>
          {expertise.map((item) => (
            <ExpertiseItem key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </ExpertiseItem>
          ))}
        </ExpertiseGrid>
      </Section>
    </Container>
  )
}
