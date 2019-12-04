import React, {Component } from 'react'

import FormBar from '../components/FormParts/FormBar'
import SuccessForm from '../components/FormParts/SuccessForm'
import FormPart from '../components/FormParts/FormPart'

import {Step, Segment} from 'semantic-ui-react'

import {Redirect} from 'react-router-dom'

import $ from 'jquery';

const LABELS = {
    user: {first_name: "First Name", last_name: "Last Name", email: "Email", phone: "Phone", resume: "Resume", profile_image: "Profile Pic"},
    educations: {university: "University", degree: "Decgree", concentration: "Concentration", start: "Start", end: "End"},
    websites: {link: "Link"},
    skills: {name: "Skill", proficiency: "Proficiency"},
    projects: {title: "Project Title", link: "Link"},
    work_experiences: {company: "Company", title: "Title", description: "Description", start: "Start", end:"End", city:"City", state:"State"},
    addresses: {street1: "Street", street2: "Street 2", city: "City", state: "State", zip: "Zip", country: "Country"}
}

const FIELD_OBJ = {
    user: {first_name: "", last_name: "", email: "", phone: "", resume: "", profile_image: ""},
    educations: {university: "", degree: "", concentration: "", start: "", end: ""},
    websites: {link: ""},
    skills: {name: "", proficiency: ""},
    projects: {title: "", link: ""},
    work_experiences: {company: "", title: "", description: "", start: "", end:"", city:"", state:""},
    addresses: {street1: "", street2: "", city: "", state: "", zip: "", country: ""}
}

class FormContainer extends Component {
    state = {
        step: 1,
        form: {
            user: {...FIELD_OBJ.user, ...this.props.currentUser},
            work_experiences: [{...FIELD_OBJ.work_experiences}],
            skills: [{...FIELD_OBJ.skills}],
            educations: [{...FIELD_OBJ.educations}],
            projects: [{...FIELD_OBJ.projects}],
            websites: [{...FIELD_OBJ.websites}],
            addresses: [{...FIELD_OBJ.addresses}]
        },
        errors: ''
    }

    submitForm = () =>{
        // this.setState(previousState => ({ 
        //     form: {
        //         ...this.state.form,
        //         user: {
        //             ...this.state.form.user,
        //             username: (previousState.form.user.first_name + previousState.form.user.last_name).toLowerCase()
        //         }
        //     }  
        // }), () => {

        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                accept: "application/json"
            },
            body: JSON.stringify(this.state.form)
        })
        .then(resp => resp.json())
        .then(json => {
            console.log(json)
            if(json.data) {
                console.log(json)
                  this.props.setUser(json.data)
                  // No need to redirect here, this will conditonally re-render home
              } else {
                  this.props.setUser({})
                  this.setState({
                      errors: json.errors
                  })
              }

            this.nextStep()
            // let userId = json.data.user.id
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

        // })
    }

//     handleFileChange = (accessor, value) => {
//         this.setState({
//             [accessor]: value
//         }
//         )
//     }

    handleChange = (key, subkey, value) => {
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
    
            let len = this.state.form[key].length

            this.setState({
                form: {
                    ...this.state.form,
                    [key]: this.state.form[key].map((obj, index) => {
                                if(index === len - 1){
                                    return {...obj, [subkey]: value}
                                }else{
                                    return obj
                                }
                            })
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
        const {user, addresses, educations, work_experiences, skills, projects, websites} = this.state.form
        switch (this.state.step){
            case 1:
                return <FormPart formType="user" info={user} labels={LABELS.user} nextStep={this.nextStep} handleChange={this.handleChange} handleFileChange={this.handleFileChange}/>
                
            case 2:
                return <FormPart formType="addresses" info={addresses[addresses.length -1 ]} labels={LABELS.addresses} nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} handleFileChange={this.handleFileChange}/>
                
            case 3:
                return <FormPart formType="educations" info={educations[educations.length -1 ]} labels={LABELS.educations} nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} handleFileChange={this.handleFileChange} addMore={this.addMore}/>
                
            case 4:
                return <FormPart formType="work_experiences" info={work_experiences[work_experiences.length -1 ]} labels={LABELS.work_experiences} nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} handleFileChange={this.handleFileChange} addMore={this.addMore}/>
                
            case 5:
                return <FormPart formType="skills" info={skills[skills.length -1 ]} labels={LABELS.skills} nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} handleFileChange={this.handleFileChange} addMore={this.addMore}/>
                
            case 6:
                return <FormPart formType="projects" info={projects[projects.length -1 ]} labels={LABELS.projects} nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} handleFileChange={this.handleFileChange} addMore={this.addMore}/>
                
            case 7:
                return <FormPart formType="websites" info={websites[websites.length -1 ]} labels={LABELS.websites} nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} handleFileChange={this.handleFileChange} addMore={this.addMore} submitForm={this.submitForm}/>
                
            case 8:
                // need to do something here about error handling
                return <SuccessForm currentUsername={this.props.currentUser.username}/>
                
            default:
                break; 
        }
    }

    // componentDidUpdate(){
    //     this.setState({
    //         form: {
    //             ...this.state.form,
    //             user: {
    //                 ...this.state.user,
    //                 ...this.props.currentUser
    //             }
    //         }
    //     })
    // }

    render() {
        // console.log("form state = ", this.state)
        
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