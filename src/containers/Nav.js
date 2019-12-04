import React, { Component, Fragment } from 'react'
import { Menu } from 'semantic-ui-react'
import { NavLink, Link, Redirect } from 'react-router-dom'

class Nav extends Component {

    //state = { activeItem: 'home' } //instead use props of app state

    handleItemClick = (e, { name}) => {
        this.props.setActive(name)
    }
    
    render() {

        console.log("props in Nav: ", this.props)

        const { currentUser, setUser, activeItem } = this.props
        
        return (
            <div>
            <Menu pointing secondary>
                <Menu.Item
                    as={Link} to='/'
                    name='home'
                    active={activeItem === 'home'}
                    onClick={this.handleItemClick}
                >
                    Home
                </Menu.Item>
                {
                currentUser.user ? 
                    <Fragment>
                        <Menu.Item
                            as={Link} to={`/:${currentUser.userslug}`}
                            name='profile'
                            active={activeItem === 'profile'}
                            onClick={this.handleItemClick}
                        >
                            Profile
                        </Menu.Item>
                        <Menu.Menu position='right'>
                            <Menu.Item
                            as={Link} to='/'
                            name='logout'
                            active={activeItem === 'logout'}
                            onClick={() => setUser({})}
                            />
                        </Menu.Menu>
                    </Fragment>
                :
                    <Fragment>
                        <Menu.Menu position='right'>
                            <Menu.Item
                                as={Link} to='/setup'
                                name='create'
                                active={activeItem === 'create'}
                                onClick={this.handleItemClick}
                            >
                                Create A Profile!
                            </Menu.Item>
                        </Menu.Menu>
                    </Fragment>

                }
            </Menu>
            </div>
        )
    }
}

export default Nav