import React from 'react'
import { Divider, Header } from 'semantic-ui-react'

const Education = (props) => {

    return (
        <React.Fragment>
            <Divider horizontal style={{paddingTop: 50, paddingBottom: 50}}>
                <Header as='h4'>Education</Header>
            </Divider>
            {props.education.map(education => {
                return (
                    <div style={{marginBottom: 50}} key={education.id}>
                        <Header as='h3'>{education.university}</Header>
                        <p>Degree: {education.degree}</p>
                        <p>Concentration: {education.concentration}</p>
                        <p>Start: {education.start} / End: {education.end}</p>
                    </div>
                )
            })}
        </React.Fragment>
    )

}

export default Education