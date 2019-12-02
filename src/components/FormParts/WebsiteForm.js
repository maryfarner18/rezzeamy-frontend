import React, {Component } from 'react'
import { Button, Form, Icon } from 'semantic-ui-react'


class WebsiteForm extends Component {
    state = {
        link: "",
        icon: "",
        site: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
         })
    }

    saveAndContinue = (e) => {
        e.preventDefault()
        this.props.setValue("websites", {...this.state})
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
                <Form.Field>
                    <label>Icon</label>
                    <input onChange={this.handleChange} value={this.props.websites[index].icon} name="icon"/>
                </Form.Field>
                <Form.Field>
                    <label>Site</label>
                    <input onChange={this.handleChange} value={this.props.websites[index].site} name="site" />
                </Form.Field>
                <Button onClick={this.goBack}>Back</Button>
                <Icon name="plus"/>
                <Button type='submit'>Save & Continue</Button>
            </Form>
        )
    }
}

export default WebsiteForm