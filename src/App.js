import React from 'react';
import  {withRouter} from 'react-router-dom'

import Main from './containers/Main'
import Nav from './containers/Nav'

class App extends React.Component {
  
  state = {
    user: null
  }

  setUser = (user) => {
    this.setState({
      user: {...user}
    })
  }

  render() {
    return (
      <div>
        <Nav />
        <Main currentUser={this.state.user} setUser={this.setUser}/>
      </div>
    );
  }
}

export default withRouter(App); // higher order component
