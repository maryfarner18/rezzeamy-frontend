import React, { Component } from 'react'
import { Button, Form, Divider, Header } from 'semantic-ui-react'

export default class EditForm extends Component {

    state = {
        first_name: this.props.first_name,
        last_name: this.props.last_name,
        email: this.props.email,
        phone: this.props.phone,
        work_experiences: this.props.work_experiences,
        skills: this.props.skills,
        education: this.props.education,
        projects: this.props.projects,
        websites: this.props.websites,
        addresses: this.props.addresses
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleWorkChange = (e, workExperience) => {
        let prevWorkExperience = this.state.work_experiences.find(exp => exp.id === workExperience.id)
        prevWorkExperience[e.target.name] = e.target.value
        this.setState({
            work_experiences: [...this.state.work_experiences]
        })
    }

    handleSkillChange = (e, skill) => {
        let prevSkill = this.state.skills.find(s => s.id === skill.id)
        prevSkill[e.target.name] = e.target.value
        this.setState({
            skills: [...this.state.skills]
        })
    }

    handleEduChange = (e, edu) => {
        let prevEdu = this.state.education.find(education => education.id === edu.id)
        prevEdu[e.target.name] = e.target.value
        this.setState({
            education: [...this.state.education]
        })
    }

    handleProjectChange = (e, project) => {
        let prevProject = this.state.projects.find(proj => proj.id === project.id)
        prevProject[e.target.name] = e.target.value
        this.setState({
            projects: [...this.state.projects]
        })
    }

    handleWebsiteChange = (e, website) => {
        let prevWebsite = this.state.websites.find(w => w.id === website.id)
        prevWebsite[e.target.name] = e.target.value
        this.setState({
            websites: [...this.state.websites]
        })
    }

    handleAddressChange = (e, address) => {
        let prevAddress = this.state.addresses.find(a => a.id === address.id)
        prevAddress[e.target.name] = e.target.value
        this.setState({
            addresses: [...this.state.addresses]
        })
    }

    render() {
        console.log(this.state)
        return (
            <Form onSubmit={null} style={{margin: 10}} >
                <Form.Field>
                    <label>First Name</label>
                    <Form.Input name='first_name' placeholder='First Name' value={this.state.first_name} onChange={this.handleChange}/>
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <Form.Input name='last_name' placeholder='Last Name' value={this.state.last_name} onChange={this.handleChange}/>
                </Form.Field>
                <Form.Field>
                    <label>Email</label>
                    <Form.Input name='email' placeholder='Email' value={this.state.email} onChange={this.handleChange} />
                </Form.Field>
                <Form.Field>
                    <label>Phone Number</label>
                    <Form.Input name='phone' placeholder='Phone Number' value={this.state.phone} type='number' onChange={this.handleChange} />
                </Form.Field>
                <Divider horizontal style={{paddingTop: 50, paddingBottom: 50}}>
                    <Header as='h4'>Work Experience</Header>
                </Divider>
                {this.props.work_experiences.map(exp => {
                    return (
                        <React.Fragment key={exp.id}>
                            <Form.Group widths='equal' style={{margin: 10}}>
                                <Form.Input fluid label='Company' placeholder='Company' name='company' value={exp.company} onChange={(event) => this.handleWorkChange(event, exp)} />
                                <Form.Input fluid label='Title' placeholder='Title' name='title' value={exp.title} onChange={(event) => this.handleWorkChange(event, exp)} />
                                <Form.Input fluid label='Start' placeholder='Start Date' name='start' value={exp.start} onChange={(event) => this.handleWorkChange(event, exp)} width={7} />
                                <Form.Input fluid label='End' placeholder='End Date' name='end' value={exp.end} onChange={(event) => this.handleWorkChange(event, exp)} width={7} />
                                <Form.Input fluid label='City' placeholder='City' name='city' value={exp.city} onChange={(event) => this.handleWorkChange(event, exp)} width={10} />
                                <Form.Input fluid label='State' placeholder='State' name='state' value={exp.state} onChange={(event) => this.handleWorkChange(event, exp)} width={5} />
                                <Form.Input fluid label='Description' placeholder='Description' name='description' value={exp.description} onChange={(event) => this.handleWorkChange(event, exp)} />
                            </Form.Group>
                        </React.Fragment>
                    )
                })}
                <Divider horizontal style={{paddingTop: 50, paddingBottom: 50}}>
                    <Header as='h4'>Skills</Header>
                </Divider>
                {this.props.skills.map(skill => {
                    return (
                        <React.Fragment key={skill.id}>
                            <Form.Group widths='equal' style={{margin: 10}}>
                                <Form.Input fluid label='Skill' placeholder='Skill' name='name' value={skill.name} onChange={(event) => this.handleSkillChange(event, skill)} />
                                <Form.Input fluid label='Proficiency' placeholder='Proficiency' name='proficiency' value={skill.proficiency} onChange={(event) => this.handleSkillChange(event, skill)} />
                            </Form.Group>
                        </React.Fragment>
                    )
                })}
                <Divider horizontal style={{paddingTop: 50, paddingBottom: 50}}>
                    <Header as='h4'>Education</Header>
                </Divider>
                {this.props.education.map(edu => {
                    return (
                        <React.Fragment key={edu.id}>
                            <Form.Group widths='equal' style={{margin: 10}}>
                                <Form.Input fluid label='University' placeholder='University' name='university' value={edu.university} onChange={(event) => this.handleEduChange(event, edu)} />
                                <Form.Input fluid label='Degree' placeholder='Degree' name='degree' value={edu.degree} onChange={(event) => this.handleEduChange(event, edu)} />
                                <Form.Input fluid label='Concentration' placeholder='Concentration' name='concentration' value={edu.concentration} onChange={(event) => this.handleEduChange(event, edu)} />
                                <Form.Input fluid label='Start' placeholder='Start' name='start' value={edu.start} onChange={(event) => this.handleEduChange(event, edu)} />
                                <Form.Input fluid label='End' placeholder='End' name='end' value={edu.end} onChange={(event) => this.handleEduChange(event, edu)} />
                            </Form.Group>
                        </React.Fragment>
                    )
                })}
                <Divider horizontal style={{paddingTop: 50, paddingBottom: 50}}>
                    <Header as='h4'>Projects</Header>
                </Divider>
                {this.props.projects.map(project => {
                    return (
                        <React.Fragment key={project.id}>
                            <Form.Group widths='equal' style={{margin: 10}}>
                                <Form.Input fluid label='Title' placeholder='Title' name='title' value={project.title} onChange={(event) => this.handleProjectChange(event, project)} />
                                <Form.Input fluid label='Description' placeholder='Description' name='description' value={project.description} onChange={(event) => this.handleProjectChange(event, project)} />
                                <Form.Input fluid label='Link' placeholder='Link' name='link' value={project.link} onChange={(event) => this.handleProjectChange(event, project)} />
                                <Form.Input fluid label='Image' placeholder='Image' name='image' value={project.image} onChange={(event) => this.handleProjectChange(event, project)} />
                            </Form.Group>
                        </React.Fragment>
                    )
                })}
                <Divider horizontal style={{paddingTop: 50, paddingBottom: 50}}>
                    <Header as='h4'>Websites</Header>
                </Divider>
                {this.props.websites.map(website => {
                    return (
                        <React.Fragment key={website.id}>
                            <Form.Group widths='equal' style={{margin: 10}}>
                                <Form.Input fluid label='Link' placeholder='Link To Website' name='link' value={website.link} onChange={(event) => this.handleWebsiteChange(event, website)} />
                            </Form.Group>
                        </React.Fragment>
                    )
                })}
                <Divider horizontal style={{paddingTop: 50, paddingBottom: 50}}>
                    <Header as='h4'>Addresses</Header>
                </Divider>
                {this.props.addresses.map(address => {
                    return (
                        <React.Fragment key={address.id}>
                            <Form.Group widths='equal' style={{margin: 10}}>
                                <Form.Input fluid label='Street 1' placeholder='Street Address 1' name='street1' value={address.street1} onChange={(event) => this.handleAddressChange(event, address)} />
                                <Form.Input fluid label='Street 2' placeholder='Street Address 2' name='street2' value={address.street2} onChange={(event) => this.handleAddressChange(event, address)} />
                                <Form.Input fluid label='City' placeholder='City' name='city' value={address.city} onChange={(event) => this.handleAddressChange(event, address)} />
                                <Form.Input fluid label='State' placeholder='State' name='state' value={address.state} onChange={(event) => this.handleAddressChange(event, address)} />
                                <Form.Input fluid label='Zip' placeholder='Zip' name='zip' value={address.zip} onChange={(event) => this.handleAddressChange(event, address)} />
                                <Form.Input fluid label='Country' placeholder='Country' name='country' value={address.country} onChange={(event) => this.handleAddressChange(event, address)} />
                            </Form.Group>
                        </React.Fragment>
                    )
                })}
                <Button type='submit'>Submit</Button>
            </Form>
        )
    }

}