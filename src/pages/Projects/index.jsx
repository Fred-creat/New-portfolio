import { Container, Grid, Intro, Title } from './styles'
import { projects } from '../../data/projects'
import ProjectCard from '../../components/ProjectCard'

function Projects() {
  return (
    <Container>
      <Intro>
        <span>Cases de engenharia</span>
        <Title>Software construído para resolver, automatizar e crescer.</Title>
        <p>
          Produtos SaaS, aplicações web e mobile, sistemas de gestão e soluções com IA.
          Cada case demonstra como transformo desafios de negócio em software funcional,
          escalável e pronto para evoluir.
        </p>
      </Intro>

      <Grid>
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </Grid>
    </Container>
  )
}

export default Projects
