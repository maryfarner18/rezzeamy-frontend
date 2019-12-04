import React, {Component } from 'react'

import FormBar from '../components/FormParts/FormBar'
import SuccessForm from '../components/FormParts/SuccessForm'
import FormPart from '../components/FormParts/FormPart'

import {Step, Segment, Grid} from 'semantic-ui-react'
import {API} from '../App'
import $ from 'jquery';
import {FIELD_OBJ, LABELS} from './FormData'

class FormContainer extends Component {
    state = {
        step: this.props.step,
        form: {
            user: {...FIELD_OBJ.user}, 
            work_experiences: [{...FIELD_OBJ.work_experiences}],
            skills: [{...FIELD_OBJ.skills}],
            educations: [{...FIELD_OBJ.educations}],
            projects: [{...FIELD_OBJ.projects}],
            websites: [{...FIELD_OBJ.websites}],
            addresses: [{...FIELD_OBJ.addresses}]
        },
        errors: ''
    }

    slugify = () =>{
        return `${this.state.form.user.first_name}-${this.state.form.user.last_name}`
    }

    submitForm = () => {
      
        this.setState({
            form: {
                ...this.state.form,
                user: {
                    ...this.state.form.user,
                    user_slug: this.slugify()
                }
            }
        }, () => {
            fetch(`${API}/users`, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    accepts: "application/json"
                },
                body: JSON.stringify(this.state.form)
                })
            .then(resp => resp.json())   
           .then(json => {
              console.log(json)
              if(json.data) {
                console.log(json)
                console.log("setting user")
                this.props.setUser(json.data)
                console.log("go to next step")
                this.nextStep()
                
                // No need to redirect here, this will conditonally re-render home
                
              } else {
                  this.props.setUser({})
                  this.nextStep()
                  this.setState({
                      errors: json.errors
                  })
              }
              
                // let userId = data.user.id
                // fetch(`${API}/users/${userId}`, {
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
        }
    )}

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
                return <SuccessForm currentUserSlug={this.props.currentUser.user.user_slug}/>
                
            default:
                break; 
        }
    }

    render() {       
        return (
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column textAlign='left' style={{ maxWidth: 1024 }}>
                    <Step.Group attached="top" widths={7} size='mini'>
                        <FormBar/>
                    </Step.Group>

                    <Segment attached>
                        {this.renderForm()}
                    </Segment>

                </Grid.Column>
            </Grid>
        )

    }
    
}

export default FormContainer