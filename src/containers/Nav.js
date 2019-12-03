import React, { Component, Fragment } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class Nav extends Component {

    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState(() => (
        {
            activeItem: name
        }
    ))
    
    render() {

        const { activeItem } = this.state
        const { currentUser, setUser } = this.props
        
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
                    currentUser ? 
                    <Fragment>
                        <Menu.Item
                            as={Link} to={`/${currentUser}`}
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
                            onClick={() => setUser("")}
                            />
                        </Menu.Menu>
                    </Fragment>
                :
                    <Fragment>
                        <Menu.Item
                            as={Link} to='/setup'
                            name='create'
                            active={activeItem === 'create'}
                            onClick={this.handleItemClick}
                        >
                            Create A Profile!
                        </Menu.Item>
                        <Menu.Menu position='right'>
                            <Menu.Item
                            as={Link} to='/'
                            name='login'
                            active={activeItem === 'login'}
                            onClick={this.handleItemClick}
                            />
                        </Menu.Menu>
                    </Fragment>
                }
            </Menu>
            </div>
        )
    }
}

export default Nav