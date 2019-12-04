import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Form, Button } from 'semantic-ui-react'

export class Login extends Component {

  state = {
    email: '',
    password: '',
    errors: ''
  }
  
  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { email, password } = this.state

    const user = {
        email, password
    }

    fetch('http://localhost:3000/login', {
        method: 'POST',
        credentials: 'include',
        headers: {
            "content-type": "application/json",
            accept: "application/json"
        },
        body: JSON.stringify(user)
    })
    .then( res => res.json() )
    .then( json => {
        if(json.data) {
          console.log(json)
            this.props.setUser(json.data)
            // No need to redirect here, this will conditonally re-render home
        } else {
            this.props.setUser({})
            this.setState({
                errors: json.errors
            })
        }
    })
    .catch(error => console.log('api errors:', error))
  };

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
  };
  
  render() {
    const { email, password } = this.state
    return (
      <div>
        <h1>Log In</h1>        
        <Form onSubmit={this.handleSubmit}>
          
          <Form.Input
            placeholder="email"
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <Form.Input
            placeholder="password"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />         
          <Button type="submit">
            Log In
          </Button>          
          <div>
            or <Link to='/signup'>sign up</Link>
          </div>
          
         </Form>
         <div>
             {
                this.state.errors ?
                 this.handleErrors()
                : null
             }
         </div>
      </div>
    )
  };
};

export default Login;
