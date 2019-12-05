import React from 'react'
import Login from './Login'
import {Grid} from 'semantic-ui-react'


const Landing = (props) =>{
   
    return (
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle' celled>
            <Grid.Column textAlign='left' style={{ maxWidth: 512 }} color={"grey"}>
                <Grid.Row>
                        <Login setUser={props.setUser}></Login>
                </Grid.Row>
            </Grid.Column>
        </Grid>
        

    )
    
}

export default Landing