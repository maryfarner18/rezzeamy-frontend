import React, {Component } from 'react'
import ProfileContainer from './ProfileContainer'
import Landing from './Landing'
import FormContainer from './FormContainer'
import {Route} from 'react-router-dom'

class Main extends Component {

    renderForm = () =>{
        return <FormContainer currentUser={this.props.currentUser} setUser={this.props.setUser}/>
    }

    renderProfile= () =>{
        return <ProfileContainer currentUser={this.props.user}/>
    }

    renderLanding = () =>{
        return <Landing currentUser={this.props.user} setUser={this.props.setUser}/>
    }

    render() {
        return (
            <div>
                <Route path="/:username-slug" render={this.renderProfile}/>
                <Route path="/setup" render={this.renderForm}/>
                <Route exact path="/" render={this.renderLanding }/>
            </div>
            )
    }
}

export default Main