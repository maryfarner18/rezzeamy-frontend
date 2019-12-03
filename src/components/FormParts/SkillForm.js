import React, {Component } from 'react'
import { Button, Form, Icon } from 'semantic-ui-react'

class SkillForm extends Component {
    
    handleChange = (e) => {
        this.props.handleChange("skills", this.props.skills.length-1, e.target.name, e.target.value)
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
        let index = this.props.skills.length - 1
        return (
            <Form onSubmit={this.saveAndContinue}>
                <Form.Field>
                    <label>Skill</label>
                    <input onChange={this.handleChange} value={this.props.skills[index].name} name="name" />
                </Form.Field>
                <Form.Field>
                    <label>Proficiency</label>
                    <input onChange={this.handleChange} value={this.props.skills[index].proficiency} name="proficiency" />
                </Form.Field>
                <Button onClick={this.goBack}>Back</Button>
                <Icon name="plus"/>
                <Button type='submit'>Save & Continue</Button>
            </Form>
        )
    }
}

export default SkillForm