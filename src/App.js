import React from 'react';
import  {withRouter} from 'react-router-dom'

//import './App.css';
import Main from './containers/Main'
import Nav from './containers/Nav'

class App extends React.Component {
  
  state = {
    user: "",
    page: "/"
  }

  setPage = (navPage) => {
    this.setState({
      page: navPage
    })
  }

  setUser = (username) => {
    this.setState({
      user: username
    })
  }

  render() {
    return (
      <div>
        <Nav currentUser={this.state.user} setUser={this.setUser} setPage={this.setPage}/>
        <Main currentUser={this.state.user} setUser={this.setUser} page={this.state.page}/>
      </div>
    );
  }
}

export default withRouter(App); // higher order component
