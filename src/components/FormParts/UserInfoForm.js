import React, {Component } from 'react'
import { Button, Form } from 'semantic-ui-react'

class UserInfoForm extends Component {
    
    handleChange = (e) => {
        this.props.handleChange("user", 0, e.target.name, e.target.value) 
    }

    handleFileChange = (e) => {
        let stateAccessor = e.target.name
        let file = e.target.files[0]
        this.props.handleFileChange(stateAccessor, file)
    }

    saveAndContinue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }

    render() {
        return (
            <Form onSubmit={this.saveAndContinue}>
                <Form.Field>
                    <label>First Name</label>
                    <input onChange={this.handleChange} type="text" value={this.props.user.first_name} name="first_name" placeholder='First Name' />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input onChange={this.handleChange} type="text" value={this.props.user.last_name} name="last_name" placeholder='Last Name' />
                </Form.Field>
                <Form.Field>
                    <label>Email</label>
                    <input onChange={this.handleChange} type="text" value={this.props.user.email} name="email" placeholder='email address' />
                </Form.Field>
                <Form.Field>
                    <label>Phone</label>
                    <input onChange={this.handleChange} type="text" value={this.props.user.phone} name="phone" placeholder='phone number' />
                </Form.Field>
                <Form.Field>
                    <label>Profile ⛏ </label>
                    <input onChange={this.handleChange} type="file" name="profile_image" accept="image/*"/>
                </Form.Field>
                <Form.Field>
                    <label>Resume</label>
                    <input onChange={this.handleChange} type="file" name="resume" accept="application/pdf"/>
                </Form.Field>
                <Button type='submit'>Save & Continue</Button>
            </Form>
        )
    }
}

export default UserInfoForm