import React, {Component } from 'react'
import ProfileContainer from './ProfileContainer'
import Landing from './Landing'
import FormContainer from './FormContainer'
import SignUp from './SignUp'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

class Main extends Component {

    renderForm = () =>{
        return <FormContainer currentUser={this.props.user} setUser={this.props.setUser}/>
    }

    renderProfile= () =>{
        return <ProfileContainer currentUser={this.props.user} />
    }

    renderLanding = () =>{
        return <Landing currentUser={this.props.user} setUser={this.props.setUser} handleLogin={this.props.handleLogin}/>
    }

    renderSignUp = () =>{
        return <SignUp currentUser={this.props.user} setUser={this.props.setUser} handleLogin={this.props.handleLogin}/>
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route path="/:username-slug" render={this.renderProfile}/>
                        <Route path="/setup" render={this.renderForm}/>
                        <Route exact path="/" render={this.renderLanding }/>
                        <Route exact path="/signup" render={this.renderSignUp }/>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default Main