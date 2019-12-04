import React, { Component } from 'react'
import About from '../components/Profile/About'
import Contact from '../components/Profile/Contact'
import Education from '../components/Profile/Education'
import Skills from '../components/Profile/Skills'
import Projects from '../components/Profile/Projects'
import WorkExperience from '../components/Profile/WorkExperience'
import EditForm from '../components/Profile/EditForm'
import { Button, Icon } from 'semantic-ui-react'



export default class Profile extends Component {

    state = {
        editing: false
    }

    handleEditButtonClick = () => {
        this.setState({
            editing: true
        })
    }

    handleEdit = (event) => {
        this.setState({
            editing: false
        }, () => this.props.handleEdit(event))
    }

    renderEditForm = () => {
        return <EditForm {...this.props.showUser} handleSubmit={this.handleEdit} />
    }

    renderAboutComponent = () => {
        return <About showUser={this.props.showUser.user}/>
    }

    renderWorkExperienceComponent = () => {
        return <WorkExperience about={this.props.showUser.work_experiences} />
    }

    renderSkillsComponent = () => {
        return <Skills skills={this.props.showUser.skills} />
    }

    renderEducationComponent = () => {
        return <Education educations={this.props.showUser.educations} />
    }

    renderProjectsComponent = () => {
        return <Projects projects={this.props.showUser.projects} />
    }

    renderContactComponent = () => {
        return <Contact 
                    resources={this.props.showUser.websites} 
                    addresses={this.props.showUser.addresses}
                />
    }

    renderChildComponents = () => {
        console.log('Profile props: ', this.props)
        return (
            <div style={{textAlign: 'center'}}>
                {this.renderAboutComponent()}
                {this.renderWorkExperienceComponent()}
                {this.renderSkillsComponent()}
                {this.renderEducationComponent()}
                {this.renderProjectsComponent()}
                {this.renderContactComponent()}
                <Button animated='vertical' onClick={this.handleEditButtonClick}>
                    <Button.Content hidden>Edit</Button.Content>
                    <Button.Content visible>
                        <Icon name='edit' />
                    </Button.Content>
                </Button>
            </div>
        )
    }

    renderComponents = () => {
        return this.state.editing ? this.renderEditForm() : this.renderChildComponents()
    }

    render() {
        console.log("in profile, props are ", this.props)
        return (
            this.renderComponents()
        )
    }
}