import { Card, Description, Links, Tech, TechList, Title } from './styles'

export default function ProjectCard({ project }) {
  return (
    <Card>
      <Title>{project.title}</Title>
      <Description>{project.description}</Description>

      {project.techs?.length > 0 && (
        <TechList aria-label={`Tecnologias usadas em ${project.title}`}>
          {project.techs.map((tech) => (
            <Tech key={tech}>{tech}</Tech>
          ))}
        </TechList>
      )}

      <Links>
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        )}

        {project.demo && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer">
            Demo
          </a>
        )}
      </Links>
    </Card>
  )
}
