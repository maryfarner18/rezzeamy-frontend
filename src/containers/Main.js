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
        console.log("here we are, about to got into Form Container...and we have ", this.props)
        if(!!this.props.currentUser.user) return <FormContainer step={8} currentUser={this.props.currentUser} setUser={this.props.setUser}/> 
        console.log("ya gere  ", this.props.currentUser.user)
        return <FormContainer nextStep={this.props.nextStep} step={this.props.step} currentUser={this.props.currentUser} setUser={this.props.setUser}/>
    }

    renderProfile= (routerProps) =>{
        console.log("router props", routerProps)
        if(routerProps.match.path === "/edit") return <ProfileContainer edit={true} userslug={routerProps.match.params.userslug} />
        
        return <ProfileContainer edit={false} userslug={routerProps.match.params.userslug} />
    }
    
    renderLanding = () =>{
        if(!!this.props.currentUser.user) return <Redirect to={`/${this.props.currentUser.user.user_slug}`}/>
        return <Landing currentUser={this.props.currentUser} setUser={this.props.setUser} handleLogin={this.props.handleLogin}/>
    }
    
    renderNotFound = () =>{
        return <UhOh404/>
    }

    render() {
        console.log("n main, step is", this.props.step)
        return (
            <div>
                <Switch>
                    <Route exact path="/setup" render={this.renderForm}/>
                    <Route exact path="/" render={this.renderLanding }/>
                    <Route exact path="/404" render={this.renderNotFound}/>
                    <Route exact path="/edit" render={this.renderProfile}/>
                    <Route path="/:userslug" render={this.renderProfile}/>
                    <Route render={this.renderNotFound}/>
                </Switch>
            </div>
        )
    }
}

export default  withRouter(Main)