import React, {Component } from 'react'
import About from '../components/Profile/About'
import Contact from '../components/Profile/Contact'
import Education from '../components/Profile/Education'
import Skills from '../components/Profile/Skills'
import Projects from '../components/Profile/Projects'
import WorkExperience from '../components/Profile/WorkExperience'



export default class Profile extends Component {

    renderAboutComponent = () => {
        return <About 
                    firstName={this.props.currentUser.first_name} 
                    lastName={this.props.currentUser.last_name} 
                    email={this.props.currentUser.email} 
                    phone={this.props.currentUser.phone} 
                />
    }

    renderWorkExperienceComponent = () => {
        return <WorkExperience about={this.props.currentUser.work_experiences} />
    }

    renderSkillsComponent = () => {
        return <Skills skills={this.props.currentUser.skills} />
    }

    renderEducationComponent = () => {
        return <Education education={this.props.currentUser.education} />
    }

    renderProjectsComponent = () => {
        return <Projects projects={this.props.currentUser.projects} />
    }

    renderContactComponent = () => {
        return <Contact 
                    resources={this.props.currentUser.websites} 
                    addresses={this.props.currentUser.addresses} 
                />
    }

    renderChildComponents = () => {
        return (
            <div>
                {this.renderAboutComponent()}
                {this.renderWorkExperienceComponent()}
                {this.renderSkillsComponent()}
                {this.renderEducationComponent()}
                {this.renderProjectsComponent()}
                {this.renderContactComponent()}
            </div>
        )
    }

    render() {
        console.log("in profile, props are ", this.props)
        return (
            this.renderChildComponents()
        )
    }
}