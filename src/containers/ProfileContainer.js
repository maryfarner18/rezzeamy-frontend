import React, {Component } from 'react';
import Profile from '../components/Profile';

class ProfileContainer extends Component {
    state = {

    }

    render() {
        console.log(this.props)
        return (
            <Profile />
        )
    }
}

export default ProfileContainer