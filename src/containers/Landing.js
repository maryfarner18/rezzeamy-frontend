import React, { Component } from 'react'
import Login from './Login'
import {Link} from 'react-router-dom'
import {Grid} from 'semantic-ui-react'


class Landing extends Component {
    state = {

    }

    render() {
        return (
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle' celled>
                <Grid.Column textAlign='left' style={{ maxWidth: 512 }} color={"teal"}>
                    <Grid.Row>
                         <Login setUser={this.props.setUser}></Login>
                    </Grid.Row>
                </Grid.Column>
            </Grid>
            

        )
    }
}

export default Landing