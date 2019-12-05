import React from 'react';
import { Grid } from 'semantic-ui-react';

import Login from './Login';

const Landing = props => {
  return (
    <>
      <Grid
        textAlign="center"
        style={{ height: '100vh' }}
        verticalAlign="middle"
        celled
        >
        <Grid.Column textAlign="left" style={{ maxWidth: 512 }} color={'grey'}>
          <Grid.Row>
            <Login setUser={props.setUser} />
          </Grid.Row>
        </Grid.Column>
      </Grid>
    </>
  );
};

export default Landing;
