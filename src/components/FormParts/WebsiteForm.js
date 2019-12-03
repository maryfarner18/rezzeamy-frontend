import React, {Component } from 'react'
import { Button, Form, Icon } from 'semantic-ui-react'

class WebsiteForm extends Component {
    
    handleChange = (e) => {
        this.props.handleChange("websites", this.props.websites.length-1, e.target.name, e.target.value)
    }

    saveAndContinue = (e) => {
        e.preventDefault()
        this.props.nextStep()
        this.props.submitForm()
    
    }

    goBack = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        let index = this.props.websites.length - 1
        return (
            <Form onSubmit={this.saveAndContinue}>
                <Form.Field>
                    <label>Link</label>
                    <input onChange={this.handleChange} value={this.props.websites[index].link} name="link"/>
                </Form.Field>
                <Button onClick={this.goBack}>Back</Button>
                <Icon name="plus"/>
                <Button type='submit'>Save & Continue</Button>
            </Form>
        )
    }
}

export default WebsiteForm