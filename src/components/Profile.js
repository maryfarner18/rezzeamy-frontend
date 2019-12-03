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
                    firstName={user_profile.user.first_name} 
                    lastName={user_profile.user.last_name} 
                    email={user_profile.user.email} 
                    phone={user_profile.user.phone} 
                />
    }

    renderWorkExperienceComponent = () => {
        return <WorkExperience about={user_profile.user.work_experiences} />
    }

    renderSkillsComponent = () => {
        return <Skills skills={user_profile.user.skills} />
    }

    renderEducationComponent = () => {
        return <Education education={user_profile.user.education} />
    }

    renderProjectsComponent = () => {
        return <Projects projects={user_profile.user.projects} />
    }

    renderContactComponent = () => {
        return <Contact 
                    resources={user_profile.user.websites} 
                    addresses={user_profile.user.addresses} 
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
        return (
            this.renderChildComponents()
        )
    }
}