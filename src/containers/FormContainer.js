import React, {Component } from 'react'
import EducationForm from '../components/FormParts/EducationForm'
import SkillForm from '../components/FormParts/SkillForm'
import UserInfoForm from '../components/FormParts/UserInfoForm'
import WorkExperienceForm from '../components/FormParts/WorkExperienceForm'
import ProjectForm from '../components/FormParts/ProjectForm'
import AddressForm from '../components/FormParts/AddressForm'
import WebsiteForm from '../components/FormParts/WebsiteForm'

import {NavLink} from 'react-router-dom'
import { Icon, Step, Segment, Form, Message } from 'semantic-ui-react'

import $ from 'jquery';

const FIELD_OBJ = {
    educations: {university: "", degree: "", concentration: "", start: "", end: ""},
    websites: {link: ""},
    skills: {name: "", proficiency: ""},
    projects: {title: "", link: ""},
    work_experiences: {company: "", title: "", start: "", end:"", city:"", state:""},
}

class FormContainer extends Component {
    state = {
        step: 1,
        form: {
            user: {first_name: "", last_name: "", email: "", phone: "", username: " "},
            work_experiences: [{...FIELD_OBJ.work_experiences}],
            skills: [{...FIELD_OBJ.skills}],
            educations: [{...FIELD_OBJ.educations}],
            projects: [{...FIELD_OBJ.projects}],
            websites: [{...FIELD_OBJ.websites}],
            addresses: [{street1: "", street2: "", city: "", state: "", zip: "", country: ""}]
        },
        resume: "",
        profile_image: ""
    }

    submitForm = () =>{
        this.setState(previousState => ({ 
            form: {
                ...this.state.form,
                user: {
                    ...this.state.form.user,
                    username: (previousState.form.user.first_name + previousState.form.user.last_name).toLowerCase()
                }
            }  
        }), () => {
            console.log("ABOUT TO SUBMIT")
            console.log(this.state) 
    
            fetch("http://localhost:3000/users", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    accepts: "application/json"
                },
                body: JSON.stringify(this.state.form)
            })
            .then(resp => resp.json())
            .then(data => {
                console.log("GOT BACK: ", data)
                // working on this
            })
            .catch(console.log)

        })
    }

    handleFileChange = (accessor, value) => {
        this.setState({
            [accessor]: value
        }
        )
    }

    handleChange = (key, index, subkey, value) => {
        if(key === "user"){
            this.setState({
                form: {
                    ...this.state.form,
                    user: {
                        ...this.state.form.user,
                        [subkey]: value
                    }
                }
            })

        }else{
            let newArr = [...this.state.form[key]]
            newArr[index] = Object.assign(newArr[index], {[subkey]: value})
            this.setState({
                form: {
                    ...this.state.form,
                    [key]: [...newArr]
                } 
            })
        }
    }

    addMore = (key) => {
   
        this.setState({
            form: {
                ...this.state.form,
                [key]: [...this.state.form[key], {...FIELD_OBJ[key]}]
            }
        })
    }

    nextStep = () => {
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
        $('#'+ thisStep).removeClass("active").addClass("disabled")
        this.setState({
            step: nextStep
        })
    }

    renderForm = () => {
        switch (this.state.step){
            case 1:
                return <UserInfoForm user={this.state.form.user} profileImage={this.state.profile_image} resume={this.state.resume} nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} handleFileChange={this.handleFileChange}/>
            case 2:
                return <AddressForm submitForm={this.submitForm} addresses={this.state.form.addresses} nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange}/>
            case 3:
                return <EducationForm education={this.state.form.educations} nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} addMore={this.addMore}/>
            case 4:
                return <WorkExperienceForm experiences={this.state.form.work_experiences} nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} addMore={this.addMore}/>
            case 5:
                return <SkillForm skills={this.state.form.skills} nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} addMore={this.addMore}/>
            case 6:
                return <ProjectForm projects={this.state.form.projects} nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} addMore={this.addMore}/>
            case 7:
                return <WebsiteForm websites={this.state.form.websites} submitForm={this.submitForm} nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} addMore={this.addMore}/>
            case 8:
                return <Form success>
                            <Message success header='Form Completed' content="You're all set!"/>
                            <NavLink to={`/${this.state.form.user.username}`}>Go To Your Page!</NavLink>
                        </Form>
            default:
                break; 

        }
    }

    render() {
        console.log("state on render = ", this.state )
        return (
            <React.Fragment>
            <Step.Group attached="top" widths={7} size='mini'>
                <Step id="1" active>
                    <Icon name='user' />
                    <Step.Content>
                        <Step.Title>User Info</Step.Title>
                        <Step.Description>Who Are You?</Step.Description>
                    </Step.Content>
                </Step>

                <Step id="2" disabled>
                    <Icon name='address book' />
                    <Step.Content>
                        <Step.Title>Address</Step.Title>
                        <Step.Description>Where Are You?</Step.Description>
                    </Step.Content>
                </Step>

                <Step id="3" disabled>
                    <Icon name='graduation' />
                    <Step.Content>
                        <Step.Title>Education</Step.Title>
                        <Step.Description>Where You've Learned</Step.Description>
                    </Step.Content>
                </Step>

                <Step id="4" disabled>
                    <Icon name='briefcase' />
                    <Step.Content>
                        <Step.Title>Work Experience</Step.Title>
                        <Step.Description>Where You've Worked</Step.Description>
                    </Step.Content>
                </Step>

                <Step  id="5" disabled>
                    <Icon name='tasks' />
                    <Step.Content>
                        <Step.Title>Skills</Step.Title>
                        <Step.Description>What You're Good At</Step.Description>
                    </Step.Content>
                </Step>

                <Step id="6" disabled>
                    <Icon name='code branch' />
                    <Step.Content>
                        <Step.Title>Projects</Step.Title>
                        <Step.Description>What You've Made</Step.Description>
                    </Step.Content>
                </Step>

                <Step id="7" disabled>
                    <Icon name='globe' />
                    <Step.Content>
                        <Step.Title>Websites</Step.Title>
                        <Step.Description>Where You Post</Step.Description>
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