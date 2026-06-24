import {
  Card,
  CardHeader,
  Category,
  Description,
  Links,
  ProjectMeta,
  Status,
  Tech,
  TechList,
  Title,
} from './styles'

export default function ProjectCard({ project, index = 0 }) {
  const hasLinks = project.github || project.api || project.demo

  return (
    <Card $accent={project.accent}>
      <ProjectMeta>
        <span>{String(index + 1).padStart(2, '0')}</span>
        <span>{project.year}</span>
      </ProjectMeta>

      <CardHeader>
        <div>
          <Category>{project.category}</Category>
          <Title>{project.title}</Title>
        </div>
        <Status>{project.status}</Status>
      </CardHeader>

      <Description>{project.description}</Description>

      {project.techs?.length > 0 && (
        <TechList aria-label={`Tecnologias usadas em ${project.title}`}>
          {project.techs.map((tech) => (
            <Tech key={tech}>{tech}</Tech>
          ))}
        </TechList>
      )}

      <Links aria-label={`Links do projeto ${project.title}`}>
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer">
            Ver projeto <span aria-hidden="true">↗</span>
          </a>
        )}
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            Código <span aria-hidden="true">↗</span>
          </a>
        )}
        {project.api && (
          <a href={project.api} target="_blank" rel="noopener noreferrer">
            API <span aria-hidden="true">↗</span>
          </a>
        )}
        {!hasLinks && <span>Case disponível sob consulta</span>}
      </Links>
    </Card>
  )
}
