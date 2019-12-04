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
         if(this.props.currentUser.user_slug) return <Redirect to='/:user_slug'/>
        return <FormContainer setUser={this.props.setUser}/>
    }

    renderProfile= (routerProps) =>{
        console.log("router props", routerProps)
        return <ProfileContainer userslug={routerProps.match.params.userslug} />
    }
    
    renderLanding = () =>{
        return <Landing 
        currentUser={this.props.user} 
        setUser={this.props.setUser} 
        />
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