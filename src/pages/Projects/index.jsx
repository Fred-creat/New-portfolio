import React from 'react';
import { Container, Title, Grid } from './styles';
import { projects } from '../../data/projects';
import ProjectCard from '../../components/ProjectCard';


function Projects() {
  return (
    <Container>
      <Title>Alguns Projetos</Title>

      <Grid>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Grid>
    </Container>
  );
}

export default Projects;
