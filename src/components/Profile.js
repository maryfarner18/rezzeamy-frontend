import React, { Component } from 'react'
import About from '../components/Profile/About'
import Contact from '../components/Profile/Contact'
import Education from '../components/Profile/Education'
import Skills from '../components/Profile/Skills'
import Projects from '../components/Profile/Projects'
import WorkExperience from '../components/Profile/WorkExperience'
import EditForm from '../components/Profile/EditForm'
import { Button, Icon } from 'semantic-ui-react'
import {withRouter} from 'react-router-dom'


class Profile extends Component {

    handleEditButtonClick = () => {
        this.props.history.push("/edit")
    }

    // handleEdit = (event) => {
    //     this.props.submitEdit(event)

    // }

    renderEditForm = () => {
        return <EditForm {...this.props.showUser} handleSubmit={this.props.submitEdit} />
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
        return this.props.edit ? this.renderEditForm() : this.renderChildComponents()
    }

    render() {
        console.log("in profile, props are ", this.props)
        return (
            this.renderComponents()
        )
    }
}

export default withRouter(Profile)