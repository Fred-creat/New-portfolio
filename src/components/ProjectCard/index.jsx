
import {Card, Title, Description, Links } from './styles'


export default function ProjectCard({ project }) {
  return (
    <Card>
      <Title>{project.title}</Title>
      <Description>{project.description}</Description>

      <Links>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        )}

        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo
          </a>
        )}
      </Links>
    </Card>
  );
}
