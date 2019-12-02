import React, {Component } from 'react'
import { Button, Form } from 'semantic-ui-react'


class UserInfoForm extends Component {
    state = {
        username: "",
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        username: "",
        profile_image: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })   
    }

    saveAndContinue = (e) => {
        e.preventDefault()
        this.setState(previousState => ({ 
            username: (previousState.first_name + previousState.last_name).toLowerCase()
        }), this.moveOn)
        
    }

    moveOn = () => {
        this.props.setValue('user', {...this.state})
        this.props.nextStep()
    }

    render() {
        return (
            <Form onSubmit={this.saveAndContinue}>
                <Form.Field>
                    <label>First Name</label>
                    <input onChange={this.handleChange} value={this.props.user.first_name} name="first_name" placeholder='First Name' />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input onChange={this.handleChange} value={this.props.user.last_name} name="last_name" placeholder='Last Name' />
                </Form.Field>
                <Form.Field>
                    <label>Email</label>
                    <input onChange={this.handleChange} value={this.props.user.email} name="email" placeholder='email address' />
                </Form.Field>
                <Form.Field>
                    <label>Phone</label>
                    <input onChange={this.handleChange} value={this.props.user.phone} name="phone" placeholder='phone number' />
                </Form.Field>
                <Button type='submit'>Save & Continue</Button>
            </Form>
        )
    }
}

export default UserInfoForm