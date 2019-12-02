import React, {Component } from 'react'
import { Button, Form } from 'semantic-ui-react'


class WorkExperienceForm extends Component {
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

    goBack = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        return (
            <Form onSubmit={this.saveAndContinue}>
                <Form.Field>
                    <label>Company</label>
                    <input onChange={this.setValue} name="company" placeholder='University' />
                </Form.Field>
                <Form.Field>
                    <label>Title</label>
                    <input onChange={this.setValue} name="title" />
                </Form.Field>
                <Form.Field>
                    <label>Concentration</label>
                    <input onChange={this.setValue} name="concentration" />
                </Form.Field>
                <Form.Field>
                    <label>Start</label>
                    <input onChange={this.setValue} name="start" />
                </Form.Field>
                <Form.Field>
                    <label>End</label>
                    <input onChange={this.setValue} name="end" />
                </Form.Field>
                <Button onClick={this.goBack}>Back</Button>
                <Button type='submit'>Save & Continue</Button>
            </Form>
        )
    }
}

export default WorkExperienceForm