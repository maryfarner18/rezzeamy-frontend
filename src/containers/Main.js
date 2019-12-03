import React, { Component } from 'react'
import {Route, withRouter} from 'react-router-dom'

import ProfileContainer from './ProfileContainer'
import Landing from './Landing'
import UhOh404 from '../components/UhOh404'
import FormContainer from './FormContainer'

class Main extends Component {

    renderForm = () =>{
        console.log("rendering form")
        return <FormContainer currentUser={this.props.currentUser} setUser={this.props.setUser}/>
    }

    renderProfile= () =>{
        console.log("rendering profile")
        return <ProfileContainer currentUser={this.props.currentUser}/>
    }

    renderLanding = () =>{
        console.log("rendering landing")
        return <Landing currentUser={this.props.user} setUser={this.props.setUser}/>
    }
    
    renderNotFound = () =>{
        console.log("rendering error")
        return <UhOh404/>
    }

    render() {
        return (
            <div>
                <Route exact path="/setup" render={this.renderForm}/>
                <Route exact path="/" render={this.renderLanding }/>
                <Route path="/:username" render={this.renderProfile}/>
                <Route render={this.renderNotFound}/>
            </div>
            )
    }
}

export default  withRouter(Main)