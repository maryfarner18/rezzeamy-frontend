import React, { Component } from 'react'
import Login from './Login'
import {Link} from 'react-router-dom'
import {Grid} from 'semantic-ui-react'


class Landing extends Component {
    state = {

    }

    render() {
        return (
            <Grid columns={2} divided>
                <Grid.Row>
                    <Grid.Column>
                        <Login handleLogin={this.props.handleLogin}></Login>
                    </Grid.Column>
                    <Grid.Column>
                        <Link to="/signup">Get Started!</Link>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            

        )
    }
}

export default Landing