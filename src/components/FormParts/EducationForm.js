import React, {Component } from 'react'
import { Button, Form } from 'semantic-ui-react'

class EducationForm extends Component {

    handleChange = (e) => {
        this.props.handleChange("educations", this.props.education.length-1, e.target.name, e.target.value)
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
        let index = this.props.education.length - 1
        return (
            <Form onSubmit={this.saveAndContinue}>
                <Form.Field>
                    <label>University</label>
                    <input onChange={this.handleChange} value={this.props.education[index].university} name="university" placeholder='University' />
                </Form.Field>
                <Form.Field>
                    <label>Degree</label>
                    <input onChange={this.handleChange} value={this.props.education[index].degree} name="degree" />
                </Form.Field>
                <Form.Field>
                    <label>Concentration</label>
                    <input onChange={this.handleChange} value={this.props.education[index].concentration} name="concentration" />
                </Form.Field>
                <Form.Field>
                    <label>Start</label>
                    <input onChange={this.handleChange} value={this.props.education[index].start} name="start" />
                </Form.Field>
                <Form.Field>
                    <label>End</label>
                    <input onChange={this.handleChange} value={this.props.education[index].end} name="end" />
                </Form.Field>
                <Button onClick={this.goBack}>Back</Button>
                <Button type='submit'>Save & Continue</Button>
            </Form>
        )
    }
}

export default EducationForm