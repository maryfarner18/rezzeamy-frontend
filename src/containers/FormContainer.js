import React, {Component } from 'react'
import $ from 'jquery';
import {Step, Segment} from 'semantic-ui-react'

import FormBar from '../components/FormParts/FormBar'
import SuccessForm from '../components/FormParts/SuccessForm'
import FormPart from '../components/FormParts/FormPart'

import {FIELD_OBJ, LABELS} from './FormData'
import {API} from '../App'

class FormContainer extends Component {
    state = {
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

              if(json.data) {
      
                this.props.setUser(json.data)
   
                this.nextStep()
                
                // No need to redirect here, this will conditonally re-render home
                
              } else {
                  this.props.setUser({})
                  this.nextStep()
                  this.setState({
                      errors: json.errors
                  })
              }
              
                let userId = json.data.user.id
                const {profile_image, resume} = this.state.form.user
       
                if (profile_image && resume) {
                    let formData = new FormData()
                    formData.append("profile_image", profile_image, `Profile${userId}Image.jpg`)
                    formData.append("resume", resume, `Resume${userId}.pdf`)
    
                    fetch(`${API}/users/${userId}/files`, {
                        method: "POST",
                        body: {
                            formData
                        }
                    })
                    .then(resp => resp.json())
                    .then(console.log)
                }
            })
            .catch(console.log)
        })
    }

    handleFileChange = (accessor, value) => {
        this.setState((prevState) => (
            {
                form: {
                    ...prevState.form,
                    user: {
                        ...prevState.form.user,
                        [accessor]: value
                    }
                }
            }
        )
        )
    }

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
        let thisStep = this.props.step
        let newStep = thisStep + 1
        $('#'+ newStep).addClass('active').removeClass("disabled")
        $('#'+ thisStep).addClass("completed").removeClass("active")
        this.props.nextStep(newStep)
    }

    prevStep = () => {
        let thisStep = this.props.step
        let newStep = this.props.step - 1
        $('#'+ newStep).addClass('active').removeClass("disabled")
        $('#'+ thisStep).removeClass("active").addClass("disabled")
        this.props.nextStep(newStep)
    }

    renderForm = () => {
        const {user, addresses, educations, work_experiences, skills, projects, websites} = this.state.form

        switch (this.props.step){
            case 1:
                return <FormPart formType="user" info={user} labels={LABELS.user} nextStep={this.nextStep} handleFileChange={this.handleFileChange} handleChange={this.handleChange}/>
                
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
           // <Grid textAlign='center' style={{ maxheight: '100vh' }} verticalAlign='top'>
           //     <Grid.Column textAlign='left'>
           <div>
                    <Step.Group attached="top" widths={7} 
                    size='mini'>
                        <FormBar/>
                    </Step.Group>

                    <Segment attached>
                        {this.renderForm()}
                    </Segment>
            </div>

         //       </Grid.Column>
         //   </Grid>
        )

    }
    
}

export default FormContainer