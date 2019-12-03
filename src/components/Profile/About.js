import React from 'react'
import { Container, Header } from 'semantic-ui-react'

const About = (props) => {

    let fullName = `${props.firstName} ${props.lastName}`

    return (
        <Container text>
            <Header
                as='h1'
                content={fullName}
                style={{
                    fontSize: '60px',
                    fontWeight: 'normal',
                    marginTop: 100
                }}
            />
            <Header
                as='h2'
                content={`${props.email}`}
                style={{
                    fontSize: '20px',
                    fontWeight: 'normal',
                    margin: 0
                }}
            />
            <Header
                as='h2'
                content={`${props.phone}`}
                style={{
                    fontSize: '20px',
                    fontWeight: 'normal',
                    margin: 0,
                    marginBottom: 100
                }}
            />
        </Container>
    )
}

export default About