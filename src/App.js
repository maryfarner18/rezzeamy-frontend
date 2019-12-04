import React from 'react';
import  {withRouter} from 'react-router-dom'

import Main from './containers/Main'
import Nav from './containers/Nav'

export const API = 'http://localhost:3000'

class App extends React.Component {
  
  state = {
    currentUser: {}
  }

  setUser = (data) => {
    this.setState({
      currentUser: {...data}
    }, () => {

      if (!!data.user) {
        localStorage.user_id = data.user.id
      } else {
        localStorage.removeItem("user_id")
      }
    }
    )
  }
  
  componentDidMount() {
    const user_id = localStorage.user_id

    if (user_id) {
      fetch(`${API}/auto_login`, {
        headers: {
          "Authorization": user_id
        }
      })
      .then(res => res.json())
      .then(json => {
        console.log("JSON response: ", json)
        if (json.errors) {
          alert(json.errors)
        } else {
          this.setUser(json.data)
        }
    })
      .catch(err => console.log("errors: ", err))
    } 
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
