import React, { Component } from 'react';
import Profile from '../components/Profile';
import {FIELD_OBJ} from './FormData'
import {API} from '../App'
import {Redirect, withRouter} from 'react-router-dom'
import {Dimmer, Segment, Image, Loader} from 'semantic-ui-react'

class ProfileContainer extends Component {
    state = {
         showUser: {
            user: {...FIELD_OBJ.user}, 
            work_experiences: [{...FIELD_OBJ.work_experiences}],
            skills: [{...FIELD_OBJ.skills}],
            educations: [{...FIELD_OBJ.educations}],
            projects: [{...FIELD_OBJ.projects}],
            websites: [{...FIELD_OBJ.websites}],
            addresses: [{...FIELD_OBJ.addresses}]
         },
         loading: true
    }

    componentDidMount() {
        console.log("HERE, fetching to get", this.props.userslug)
        fetch(`${API}/users/${this.props.userslug}`)
        .then(resp => resp.json())
        .then(json => {
            if(!json.data){
                this.props.history.push('/404')
            }else {
                this.setState({
                    showUser: json.data,
                    loading: false
                })
            }
            
        })
        .catch(error => {
            console.log('errors fetching that user to show:', error)
            return <Redirect to="404"/>
        })
    }

    setUser = (json) => {
        this.setState({ showUser: json })
    }

    renderLoading = () => {
       return (
            <Segment style={{ minHeight: 100 }}>
                <Dimmer active>
                    <Loader indeterminate>Preparing Files</Loader>
                </Dimmer>
            </Segment>
        )
    }

    render() {
        return (
            this.state.loading?  this.renderLoading() : <Profile showUser={this.state.showUser}/>
        )
    }

}

export default withRouter(ProfileContainer)