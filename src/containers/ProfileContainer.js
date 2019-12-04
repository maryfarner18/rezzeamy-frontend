import React, { Component } from 'react';
import Profile from '../components/Profile';

class ProfileContainer extends Component {
    // state = {
    //     user: {}
    // }

    // componentDidMount() {
    //     fetch('http://localhost:3001/users/mary-farner')
    //     .then(resp => resp.json())
    //     .then(json => {
    //         this.setUser(json)
    //     })
    // }

    setUser = (json) => {
        this.setState({ user: json })
    }

    render() {
        return (
            <Profile />
        )
    }

}

export default ProfileContainer