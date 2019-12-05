import React from 'react';
import { Divider, Header, Grid, Card } from 'semantic-ui-react';

const Skills = (props) => {

    const renderRows = () => {
        let arr = []
        for(let i = 0; i< Math.ceil(props.skills.length / 6); i++){
            arr.push(
            <Grid.Row key={i} columns={Math.min(6, (props.skills.length - 6) * (i+1))}>
                {renderRow(props.skills.slice(i*6, ((i+1)*6)))}
            </Grid.Row>)
        }
        return arr
    }

    const renderRow = (skills) =>{
        return skills.map(skill => {
            return (
                <Grid.Column key={skill.id}>
                    <div className='ui centered card'>
                        <Card>
                            <Card.Content>
                                <Card.Header>{skill.name}</Card.Header>
                                <Card.Meta>{skill.proficiency}</Card.Meta>
                            </Card.Content>
                        </Card>
                    </div>
                </Grid.Column>
            )
        })
    }
                    
           
    
    return (
        <React.Fragment>
            <Divider horizontal style={{paddingTop: 50, paddingBottom: 50}}>
                <Header as='h4'>Skills</Header>
            </Divider>
            <Grid centered>
                {renderRows()}
            </Grid>
        </React.Fragment>
    )

export default Skills;
