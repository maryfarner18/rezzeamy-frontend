import React from 'react';
import  {withRouter} from 'react-router-dom'

import Main from './containers/Main'
import Nav from './containers/Nav'

class App extends React.Component {
  
  state = {
    isLoggedIn: false,
    user: null
  }

  handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user.username
    })
  }

  handleLogout = () => {
    this.setState({
    isLoggedIn: false,
    user: ""
    })
  }

  loginStatus = () => {
    fetch('http://localhost:3001/logged_in', {
        credentials: 'include'
    })   
   .then(response => {
      if (response.data.logged_in) {
        this.handleLogin(response)
      } else {
        this.handleLogout()
      }
    })
    .catch(error => console.log('api errors:', error))
  }

  setUser = (user) => {
    this.setState({
      user: {...user}
    })
  }

  componentDidMount() {
    this.loginStatus()
  }

  render() {
    return (
      <div>
        <Nav currentUser={this.state.user} setUser={this.setUser} />
        <Main currentUser={this.state.user} setUser={this.setUser} handleLogin={this.handleLogin} loginStatus={this.loginStatus}/>
      </div>
    );
  }
}

export default withRouter(App); // higher order component
