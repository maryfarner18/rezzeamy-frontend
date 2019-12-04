import React, { Component } from 'react'
import ProfileContainer from './ProfileContainer'
import Landing from './Landing'
import UhOh404 from '../components/UhOh404'
import FormContainer from './FormContainer'

import { Switch, Route, withRouter, Redirect } from 'react-router-dom'

class Main extends Component {

    getUserFormInfo = () => {

    }

    renderForm = () =>{
        console.log("current user ", this.props.currentUser)
        if(!!this.props.currentUser.user) return <FormContainer step={8} currentUser={this.props.currentUser} setUser={this.props.setUser}/> //<Redirect to={`/${this.props.currentUser.user.user_slug}`}/>
        console.log("ya gere  ", this.props.currentUser.user)
        return <FormContainer currentUser={this.props.currentUser} setUser={this.props.setUser} step={1}/>
    }

    renderProfile= (routerProps) =>{
        console.log("router props", routerProps)
        return <ProfileContainer userslug={routerProps.match.params.userslug} currentUser={this.props.currentUser} />
    }
    
    renderLanding = () =>{
        if(!!this.props.currentUser.user) return <Redirect to={`/${this.props.currentUser.user.user_slug}`}/>
        return <Landing currentUser={this.props.currentUser} setUser={this.props.setUser} handleLogin={this.props.handleLogin}/>
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
                    <Route exact path="/404" render={this.renderNotFound}/>
                    <Route path="/:userslug" render={this.renderProfile}/>
                    <Route render={this.renderNotFound}/>
                </Switch>
            </div>
        )
    }
}

export default  withRouter(Main)