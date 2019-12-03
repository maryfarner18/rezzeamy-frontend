import React, {Component } from 'react'

import EducationForm from '../components/FormParts/EducationForm'
import SkillForm from '../components/FormParts/SkillForm'
import UserInfoForm from '../components/FormParts/UserInfoForm'
import WorkExperienceForm from '../components/FormParts/WorkExperienceForm'
import ProjectForm from '../components/FormParts/ProjectForm'
import AddressForm from '../components/FormParts/AddressForm'
import WebsiteForm from '../components/FormParts/WebsiteForm'
import FormBar from '../components/FormParts/FormBar'
import SuccessForm from '../components/FormParts/SuccessForm'

import {Step, Segment} from 'semantic-ui-react'

import $ from 'jquery';

const FIELD_OBJ = {
    educations: {university: "", degree: "", concentration: "", start: "", end: ""},
    websites: {link: ""},
    skills: {name: "", proficiency: ""},
    projects: {title: "", link: ""},
    work_experiences: {company: "", title: "", description: "", start: "", end:"", city:"", state:""},
}

class FormContainer extends Component {
    state = {
        step: 1,
        form: {

            user: {first_name: "", last_name: "", email: "", phone: "", username: "", resume: "", profile_image: ""},
            work_experiences: [{...FIELD_OBJ.work_experiences}],
            skills: [{...FIELD_OBJ.skills}],
            educations: [{...FIELD_OBJ.educations}],
            projects: [{...FIELD_OBJ.projects}],
            websites: [{...FIELD_OBJ.websites}],
            addresses: [{street1: "", street2: "", city: "", state: "", zip: "", country: ""}]
        },
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
                if(data.user.username !== "undefined"){
                    console.log("setting username in app to ", data.user.username)
                    this.props.setUser(data.user.username)
                }
                this.nextStep()
                // let userId = data.user.id
                // fetch(`http://localhost:3000/users/${userId}`, {
                //     method: "PATCH",
                //     body: {
                //         profile_image: this.state.profile_image,
                //         resume: this.state.resume
                //     }
                // })
                // .then(resp => resp.json())
                // .then(console.log)
            })
            .catch(console.log)

        })
    }

//     handleFileChange = (accessor, value) => {
//         this.setState({
//             [accessor]: value
//         }
//         )
//     }

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
                return <SuccessForm currentUser={this.props.currentUser}/>
            default:
                break; 
        }
    }

    render() {
        return (
            <React.Fragment>
            <Step.Group attached="top" widths={7} size='mini'>
                <FormBar/>
            </Step.Group>

            <Segment attached>
                {this.renderForm()}
            </Segment>

            </React.Fragment>
        )
    }
}

export default FormContainer