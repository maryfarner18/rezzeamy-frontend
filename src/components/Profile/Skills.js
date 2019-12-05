import React from 'react';
import { Divider, Header, Grid, Card } from 'semantic-ui-react';

const Skills = props => {
  return (
    <>
      <Divider horizontal style={{ paddingTop: 50, paddingBottom: 50 }}>
        <Header as="h4">Skills</Header>
      </Divider>
      <Grid celled="internally" divided="vertically">
        <Grid.Row columns={props.skills.length}>
          {props.skills.map(skill => {
            return (
              <Grid.Column key={skill.id}>
                <div className="ui centered card">
                  <Card>
                    <Card.Content>
                      <Card.Header>{skill.name}</Card.Header>
                      <Card.Meta>{skill.proficiency}</Card.Meta>
                    </Card.Content>
                  </Card>
                </div>
              </Grid.Column>
            );
          })}
        </Grid.Row>
      </Grid>
    </>
  );
};

export default Skills;
