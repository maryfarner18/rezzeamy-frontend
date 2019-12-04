import React, { Component } from 'react';
import { Form } from 'semantic-ui-react'


export class SignUp extends Component {

  state = {
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
    errors: ''
  }

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  redirect = () => {
    this.props.history.push('/setup')
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const {username, email, password, password_confirmation} = this.state
    let user = {
      username: username,
      email: email,
      password: password,
      password_confirmation: password_confirmation
    }

    fetch('http://localhost:3000/users', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'content-type': 'application/json',
        accept: 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then( res => res.json() )
    .then( data => {
        if(data.logged_in) {
            this.props.handleLogin(data)
            this.redirect()
        } else {
            this.setState({
                errors: data.errors
            })
        }
    })
    .catch(error => console.log('api errors:', error))
  }

  handleErrors = () => {
    return (
      <div>
        <ul>
        {this.state.errors.map(error => {
        return <li key={error}>{error}</li>
          })}
        </ul>
      </div>
    )
  }
  
  render() {
    const {username, email, password, password_confirmation} = this.state
    return (
      <div>
        <h1>Sign Up</h1>        
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="username"
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
          />
          <input
            placeholder="email"
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <input 
            placeholder="password"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />          
          <input
            placeholder="password confirmation"
            type="password"
            name="password_confirmation"
            value={password_confirmation}
            onChange={this.handleChange}
          />
        
          <button placeholder="submit" type="submit">
            Sign Up
          </button>
      
        </form>
        <div>
          {
            this.state.errors ?
            this.handleErrors()
            : null
          }
        </div>
      </div>
    );
  }
}

export default SignUp;