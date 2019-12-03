import React, {Component } from 'react'
import { Route } from 'react-router-dom'
import ProfileContainer from './ProfileContainer'
import FormContainer from './FormContainer'

class Main extends Component {
    state = {

    }

    renderForm = () =>{
        return <FormContainer/>
    }

    renderProfile= (routerProps) =>{
        return <ProfileContainer {...routerProps} />
    }

    render() {
        return (
            <div>
                <Route path="/:username-slug" render={(routerProps) => this.renderProfile(routerProps)}/>
                <Route path="/setup" render={this.renderForm}/>
                <Route exact path="/" render={()=> <div>MAIN BODY</div> }/>
            </div>
            )
    }
}

export default Main