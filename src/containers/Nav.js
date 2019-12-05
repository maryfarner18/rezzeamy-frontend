import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { Link, withRouter} from 'react-router-dom';

const Nav = props => {
  const { currentUser, setUser } = props;
  return (
    <div className="nav">
      <Menu pointing secondary>
          { window.location.pathname === "/" ? 
            <Menu.Menu position="left" >
              <Menu.Item as={Link} to="/" name="home">
                <h1 className="title">rezzemay </h1>
              </Menu.Item>
            </Menu.Menu>
          : 
          
          <Menu.Item as={Link} to="/" name="home">
            <Icon name="id card" size="big" />
          </Menu.Item>
  
          }
       
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

export default withRouter(Nav);
