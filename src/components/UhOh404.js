import React from 'react';
import { Grid, Segment, Message, Icon, Header } from 'semantic-ui-react';

function UhOh404() {
  return (
    <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Segment circular style={{ height: '60vh', width: '60vh' }}>
          <Header as="h2" color="teal" textAlign="center">
            <Icon name="bug" size="massive" />
          </Header>
          <Message>
            It seems as if you've typed something stupid <br />
            Or gone somewhere that you aren't allowed. <br />
            Try agian.
          </Message>
        </Segment>
      </Grid.Column>
    </Grid>
  );
}

export default UhOh404;
