import React, {Component } from 'react'
import { Button, Form } from 'semantic-ui-react'

class WorkExperienceForm extends Component {
    
    handleChange = (e) => {
        this.props.handleChange("work_experiences", this.props.experiences.length-1, e.target.name, e.target.value)
    }

    saveAndContinue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    
    }

    goBack = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        let index = this.props.experiences.length - 1
        return (
            <Form onSubmit={this.saveAndContinue}>
                <Form.Field>
                    <label>Company</label>
                    <input onChange={this.handleChange} value={this.props.experiences[index].company} name="company"/>
                </Form.Field>
                <Form.Field>
                    <label>City</label>
                    <input onChange={this.handleChange} value={this.props.experiences[index].city} name="city" />
                </Form.Field>
                <Form.Field>
                    <label>State</label>
                    <input onChange={this.handleChange} value={this.props.experiences[index].state} name="state" />
                </Form.Field>
                <Form.Field>
                    <label>Title</label>
                    <input onChange={this.handleChange} value={this.props.experiences[index].title} name="title" />
                </Form.Field>
                <Form.Field>
                    <label>Description</label>
                    <input onChange={this.handleChange} value={this.props.experiences[index].description} name="description" />
                </Form.Field>
                <Form.Field>
                    <label>Start</label>
                    <input onChange={this.handleChange} value={this.props.experiences[index].start} name="start" />
                </Form.Field>
                <Form.Field>
                    <label>End</label>
                    <input onChange={this.handleChange} value={this.props.experiences[index].end} name="end" />
                </Form.Field>
                <Button onClick={this.goBack}>Back</Button>
                <Button type='submit'>Save & Continue</Button>
            </Form>
        )
    }
}

export default WorkExperienceForm