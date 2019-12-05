import React from 'react';
import { Divider, Header, Grid } from 'semantic-ui-react';

const WorkExperience = props => {
  return (
    <>
      <Divider horizontal style={{ paddingTop: 50, paddingBottom: 50 }}>
        <Header as="h4">Work Experience</Header>
      </Divider>

      <Grid divided="vertically">
        <Grid.Row columns={props.about.length}>
          {props.about.map(exp => {
            return (
              <Grid.Column key={exp.id}>
                <Header as="h3">{exp.company}</Header>
                <Header as="h4">
                  Start Date: {exp.start} / End Date: {exp.end}
                </Header>
                <p>
                  Location: {exp.city}, {exp.state}
                </p>
                <p>{exp.description}</p>
              </Grid.Column>
            );
          })}
        </Grid.Row>
      </Grid>
    </>
  );
};

export default WorkExperience;
