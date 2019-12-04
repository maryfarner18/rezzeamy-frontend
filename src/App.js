import React from 'react';
import  {withRouter} from 'react-router-dom'

import Main from './containers/Main'
import Nav from './containers/Nav'

export const API = 'http://localhost:3000'

class App extends React.Component {
  
  state = {
    currentUser: {}
  }

  setUser = (user) => {
    this.setState({
      currentUser: {...user}
    })
  }

  render() {
    console.log("in app state = ", this.state)
    return (
      <div>
        <Nav 
        currentUser={this.state.currentUser} 
        setUser={this.setUser} 
        />
        <Main 
        currentUser={this.state.currentUser} 
        setUser={this.setUser} />
      </div>
    );
  }
}

export default withRouter(App); // higher order component
