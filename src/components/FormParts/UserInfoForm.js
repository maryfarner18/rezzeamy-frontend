import React, {Component } from 'react'
import { Button, Form } from 'semantic-ui-react'


class UserInfoForm extends Component {
    state = [

    ]

    setValue = (e) => {
        console.log('setting value...')
        this.props.setValue(e.target.name, e.target.value)
    }

    saveAndContinue = (e) => {
        console.log("HERE")
        e.preventDefault()
        this.props.nextStep()
    }

    render() {
        return (
            <Form onSubmit={this.saveAndContinue}>
                <Form.Field>
                    <label>First Name</label>
                    <input onChange={this.setValue} name="first_name" placeholder='First Name' />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input onChange={this.setValue} name="last_name" placeholder='Last Name' />
                </Form.Field>
                <Form.Field>
                    <label>Email</label>
                    <input onChange={this.setValue} name="email" placeholder='email address' />
                </Form.Field>
                <Form.Field>
                    <label>Phone</label>
                    <input onChange={this.setValue} name="phone" placeholder='phone number' />
                </Form.Field>
                <Button type='submit'>Save & Continue</Button>
            </Form>
        )
    }
}

export default UserInfoForm