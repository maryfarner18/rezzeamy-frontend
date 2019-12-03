import React from 'react'
import {Step, Icon} from 'semantic-ui-react'

function FormBar() {
    
    return (
        <React.Fragment>
            <Step id="1" active>
                <Icon name='user' />
                <Step.Content>
                    <Step.Title>User Info</Step.Title>
                    <Step.Description>Who Are You?</Step.Description>
                </Step.Content>
            </Step>

            <Step id="2" disabled>
                <Icon name='address book' />
                <Step.Content>
                    <Step.Title>Address</Step.Title>
                    <Step.Description>Where Are You?</Step.Description>
                </Step.Content>
            </Step>

            <Step id="3" disabled>
                <Icon name='graduation' />
                <Step.Content>
                    <Step.Title>Education</Step.Title>
                    <Step.Description>Where You've Learned</Step.Description>
                </Step.Content>
            </Step>

            <Step id="4" disabled>
                <Icon name='briefcase' />
                <Step.Content>
                    <Step.Title>Work Experience</Step.Title>
                    <Step.Description>Where You've Worked</Step.Description>
                </Step.Content>
            </Step>

            <Step  id="5" disabled>
                <Icon name='tasks' />
                <Step.Content>
                    <Step.Title>Skills</Step.Title>
                    <Step.Description>What You're Good At</Step.Description>
                </Step.Content>
            </Step>

            <Step id="6" disabled>
                <Icon name='code branch' />
                <Step.Content>
                    <Step.Title>Projects</Step.Title>
                    <Step.Description>What You've Made</Step.Description>
                </Step.Content>
            </Step>

            <Step id="7" disabled>
                <Icon name='globe' />
                <Step.Content>
                    <Step.Title>Websites</Step.Title>
                    <Step.Description>Where You Post</Step.Description>
                </Step.Content>
            </Step>
        </React.Fragment>
        
    )
}

export default FormBar
