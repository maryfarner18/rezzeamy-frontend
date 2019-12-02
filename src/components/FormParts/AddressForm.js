import React, {Component } from 'react'
import { Button, Form, Icon } from 'semantic-ui-react'


class AddressForm extends Component {
    state = {
        street1: "",
        street2: "",
        city: "",
        state: "",
        zip: "",
        country: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
            })
    }

    saveAndContinue = (e) => {
        e.preventDefault()
        this.props.setValue("addresses", {...this.state})
        this.props.nextStep()
    }

    goBack = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        let index = this.props.addresses.length - 1
        return (
            <Form onSubmit={this.saveAndContinue}>
                <Form.Field>
                    <label>Street</label>
                    <input onChange={this.handleChange} value={this.props.addresses[index].street1} name="street1"/>
                </Form.Field>
                <Form.Field>
                    <label>Street 2</label>
                    <input onChange={this.handleChange} value={this.props.addresses[index].street2} name="street2"/>
                </Form.Field>
                <Form.Field>
                    <label>City</label>
                    <input onChange={this.handleChange} value={this.props.addresses[index].city} name="city" />
                </Form.Field>
                <Form.Field>
                    <label>State</label>
                    <input onChange={this.handleChange} value={this.props.addresses[index].state} name="state" />
                </Form.Field>
                <Form.Field>
                    <label>Zip</label>
                    <input onChange={this.handleChange} value={this.props.addresses[index].zip} name="zip" />
                </Form.Field>
                <Form.Field>
                    <label>Country</label>
                    <input onChange={this.handleChange} value={this.props.addresses[index].country} name="country" />
                </Form.Field>
                <Button onClick={this.goBack}>Back</Button>
                <Icon name="plus"/>
                <Button type='submit'>Save & Continue</Button>
            </Form>
        )
    }
}

export default AddressForm