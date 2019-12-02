import React, {Component } from 'react'
import ProfileContainer from './ProfileContainer'
import FormContainer from './FormContainer'

class Main extends Component {
    state = [

    ]

    renderForm = () =>{
        return <FormContainer/>
    }

    renderProfile= () =>{
        return <ProfileContainer {...routerProps}/>
    }

    render() {
        return (
            <div>
                <Route path="/:username-slug" render={this.renderProfile}/>
                <Route path="/setup" render={this.renderForm}/>
                <Route path="/" render={()=> <div>MAIN BODY</div> }/>
            </div>
            )
    }
}

export default Main