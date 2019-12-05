import React from 'react';
import { Divider, Header } from 'semantic-ui-react';

const Projects = props => {
  return (
    <>
      <Divider horizontal style={{ paddingTop: 50, paddingBottom: 50 }}>
        <Header as="h4">Projects</Header>
      </Divider>
      {props.projects.map(project => {
        return (
          <div style={{ marginBottom: 50 }} key={project.id}>
            <Header as="h3">
              <a target="_blank" rel="noopener noreferrer" href={project.link}>
                {project.title}
              </a>
            </Header>
            <p>{project.description}</p>
          </div>
        );
      })}
    </>
  );
};

export default Projects;
