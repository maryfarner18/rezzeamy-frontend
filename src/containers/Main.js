import React, { Component } from 'react'
import ProfileContainer from './ProfileContainer'
import Landing from './Landing'
import UhOh404 from '../components/UhOh404'
import FormContainer from './FormContainer'

import SignUp from './SignUp'
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom'

class Main extends Component {

    renderForm = () =>{
        return <FormContainer currentUser={this.props.currentUser} setUser={this.props.setUser}/>
    }

    renderProfile= () =>{
      return <ProfileContainer currentUser={this.props.user} />
    }
      
    renderSignUp = () =>{
        return <SignUp currentUser={this.props.user} setUser={this.props.setUser} handleLogin={this.props.handleLogin}/>      
    }
    
    renderLanding = () =>{
        return <Landing currentUser={this.props.user} setUser={this.props.setUser} handleLogin={this.props.handleLogin}/>
    }
    
    renderNotFound = () =>{
        return <UhOh404/>
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/setup" render={this.renderForm}/>
                    <Route exact path="/" render={this.renderLanding }/>
                    <Route exact path="/signup" render={this.renderSignUp }/>
                    <Route path="/:username-slug" render={this.renderProfile}/>
                    <Route render={this.renderNotFound}/>
                </Switch>
            </div>
        )
    }
}

export default  withRouter(Main)