import React, {Component } from 'react'
import { Button, Form, Icon } from 'semantic-ui-react'


class ProjectForm extends Component {
    state = {
        title: "",
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
        this.props.setValue("projects", {...this.state})
        this.props.nextStep()
    }

    goBack = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        let index = this.props.projects.length - 1
        return (
            <Form onSubmit={this.saveAndContinue}>
                <Form.Field>
                    <label>Title</label>
                    <input onChange={this.handleChange} value={this.props.projects[index].title} name="title"/>
                </Form.Field>
                <Form.Field>
                    <label>Link</label>
                    <input onChange={this.handleChange} value={this.props.projects[index].link} name="link"/>
                </Form.Field>
                <Form.Field>
                    <label>Site</label>
                    <input onChange={this.handleChange} value={this.props.projects[index].site} name="site" />
                </Form.Field>
                <Button onClick={this.goBack}>Back</Button>
                <Icon name="plus"/>
                <Button type='submit'>Save & Continue</Button>
            </Form>
        )
    }
}

export default ProjectForm