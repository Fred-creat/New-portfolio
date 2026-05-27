import { Container, Grid, Intro, Title } from './styles'
import { projects } from '../../data/projects'
import ProjectCard from '../../components/ProjectCard'

function Projects() {
  return (
    <Container>
      <Intro>
        <span>Projetos</span>
        <Title>Trabalhos recentes</Title>
        <p>Uma seleção de interfaces e experiências digitais desenvolvidas com React.</p>
      </Intro>

      <Grid>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Grid>
    </Container>
  )
}

export default Projects
