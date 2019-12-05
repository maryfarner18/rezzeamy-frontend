import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import Websites from './Websites';

const About = props => {

  const getCityState = address => {
    if(address.state && address.city ){
      return `${address.city}, ${address.state}`;
    }else {
      return `${address.city}${address.state}`;
    }
  };

  const fullName = `${props.showUser.first_name} ${props.showUser.last_name}`;
  const { phone, email } = props.showUser;
  return (
    <Container text>
      <Header
        as="h1"
        content={fullName}
        style={{
          fontSize: '60px',
          fontWeight: 'normal',
          marginTop: 100,
        }}
      />
      <Header
        as="h2"
        content={email}
        style={{
          fontSize: '20px',
          fontWeight: 'normal',
          margin: 0,
        }}
      />
      <Header
        as="h2"
        content={phone}
        style={{
          fontSize: '20px',
          fontWeight: 'normal',
          margin: 0,
          marginBottom: 10,
        }}
      />
      <Header
        as="h4"
        content={getCityState(props.address)}
        style={{
          fontSize: '16px',
          fontWeight: 'normal',
          margin: 0,
          marginBottom: 30,
        }}
      />
      <Websites sites={props.sites} />
    </Container>
  );
};

export default About;
