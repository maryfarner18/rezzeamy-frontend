import React, {Component } from 'react';
import Profile from '../components/Profile';

class ProfileContainer extends Component {
    state = {

    }

    render() {
        return (
            <Profile currentUser={this.props.currentUser}/>
        )
    }
}

export default ProfileContainer