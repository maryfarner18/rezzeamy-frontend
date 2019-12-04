import React, { Component, Fragment } from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import { NavLink, Link, Redirect } from 'react-router-dom'

class Nav extends Component {

    //state = { activeItem: 'home' } //instead use props of app state

    // handleItemClick = (e, { name}) => {
    //     this.props.setActive(name)
    // }
    
    render() {

        console.log("props in Nav: ", this.props)

        const { currentUser, setUser, activeItem } = this.props
        
        return (
            <div>
            <Menu pointing secondary>
                <Menu.Item
                    as={Link} to='/'
                    name='home'
                >
                    <Icon name= "id card" size="big" />
                </Menu.Item>
                    <Fragment>
                {
                currentUser.user ? 
                    <Menu.Menu position='right'>
                        <Menu.Item
                        as={Link} to='/'
                        name='logout'
                        onClick={() => setUser({})}
                        />
                    </Menu.Menu>
                :
    
                    <Menu.Menu position='right'>
                        <Menu.Item
                            as={Link} to='/setup'
                            name='create'
                        >
                            Create A Profile!
                        </Menu.Item>
                    </Menu.Menu>

                }
                </Fragment>
                
            </Menu>
            </div>
        )
    }
}

export default Nav