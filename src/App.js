import React from 'react';
import  {withRouter} from 'react-router-dom'

//import './App.css';
import Main from './containers/Main'
import Nav from './containers/Nav'

class App extends React.Component {
  
  state = {
    user: ""
  }

  setUser = (username) => {
    this.setState({
      user: username
    })
  }

  render() {
    console.log("App state = ", this.state)
    console.log("Sending down ", this.state.user)
    return (
      <div>
        <Nav />
        <Main currentUser={this.state.user} setUser={this.setUser}/>
      </div>
    );
  }
}

export default withRouter(App); // higher order component
