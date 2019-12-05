import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Nav = props => {
  const { currentUser, setUser } = props;

  return (
    <div className="nav">
      <Menu pointing secondary>
        <Menu.Item as={Link} to="/" name="home">
          <Icon name="id card" size="big" />
        </Menu.Item>
        <>
          {currentUser.user ? (
            <Menu.Menu position="right">
              <Menu.Item
                as={Link}
                to="/"
                name="logout"
                onClick={() => setUser({})}
              />
            </Menu.Menu>
          ) : (
            <Menu.Menu position="right">
              <Menu.Item as={Link} to="/setup" name="create">
                Create A Profile!
              </Menu.Item>
            </Menu.Menu>
          )}
        </>
      </Menu>
    </div>
  );
};

export default Nav;
