import React, {Component } from 'react'
import Form from '../components/Form'
import EducationForm from '../components/FormParts/EducationForm'
import SkillForm from '../components/FormParts/SkillForm'
import UserInfoForm from '../components/FormParts/UserInfoForm'
import WorkExperienceForm from '../components/FormParts/WorkExperienceForm'
import ProjectForm from '../components/FormParts/ProjectForm'
import UhOh404 from '../components/UhOh404' 
import { Icon, Step, Divider, Segment } from 'semantic-ui-react'

import $ from 'jquery';

class FormContainer extends Component {
    state = {
        step: 1,
        first_name: ""
    }

    setValue = (key, value) =>{
        this.setState({
            [key]: value
        })
    }

    nextStep = () => {
        console.log("moving to next step")
        let thisStep = this.state.step
        let nextStep = thisStep + 1
        $('#'+ nextStep).addClass('active').removeClass("disabled")
        $('#'+ thisStep).addClass("completed").removeClass("active")
        this.setState({
            step: nextStep
        })
    }

    prevStep = () => {
        let thisStep = this.state.step
        let nextStep = this.state.step - 1
        $('#'+ nextStep).addClass('active').removeClass("disabled")
        $('#'+ thisStep).addClass("completed").removeClass("active")
        this.setState({
            step: nextStep
        })
    }

    renderForm = () => {
        switch (this.state.step){
            case 1:
                return <UserInfoForm nextStep={this.nextStep} prevStep={this.prevStep} setValue={this.setValue}/>
            case 2:
                return <EducationForm nextStep={this.nextStep} prevStep={this.prevStep} setValue={this.setValue}/>
            case 3:
                return <WorkExperienceForm nextStep={this.nextStep} prevStep={this.prevStep} setValue={this.setValue}/>
            case 4:
                return <SkillForm nextStep={this.nextStep} prevStep={this.prevStep} setValue={this.setValue}/>
            case 5:
                return <ProjectForm nextStep={this.nextStep} prevStep={this.prevStep} setValue={this.setValue}/>
            case 6:
                return <div>Success!</div>
            default:
                break; 

        }
    }

    render() {
        return (
            <React.Fragment>
            <Step.Group attached="top">
                <Step id="1" active>
                <Icon name='user' />
                <Step.Content>
                    <Step.Title>User Info</Step.Title>
                    <Step.Description>Here's a description</Step.Description>
                </Step.Content>
                </Step>

                <Step id="2" disabled="true">
                <Icon name='graduation' />
                <Step.Content>
                    <Step.Title>Education</Step.Title>
                    <Step.Description>Tell Us Where You've Learned</Step.Description>
                </Step.Content>
                </Step>

                <Step id="3" disabled>
                <Icon name='briefcase' />
                <Step.Content>
                    <Step.Title>Work Experience</Step.Title>
                    <Step.Description>Tell Us Where You've Worked</Step.Description>

                </Step.Content>
                </Step>

                <Step  id="4" disabled>
                <Icon name='tasks' />
                <Step.Content>
                    <Step.Title>Skills</Step.Title>
                    <Step.Description>Tell Us What You're Good At</Step.Description>

                </Step.Content>
                </Step>

                <Step id="5" disabled>
                <Icon name='code branch' />
                <Step.Content>
                    <Step.Title>Projects</Step.Title>
                    <Step.Description>Show Off What You've Made</Step.Description>

                </Step.Content>
                </Step>
            </Step.Group>

            <Segment attached>
                {this.renderForm()}
            </Segment>

            </React.Fragment>
        )
    }
}

export default FormContainer