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

    renderEditForm = () => {
        return <EditForm {...user_profile.user} />
    }

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
        return (
            this.renderComponents()
        )
    }
}

let user_profile = {
    "user": {
      "id": 1,
      "user_slug": "mary-farner",
      "username": "maryfarner",
      "first_name": "Mary",
      "last_name": "Farner",
      "phone": "2692671103",
      "email": "maryfarner@gmail.com",
      "profile_image": null,
      "resume": null,
      "work_experiences": [
        {
          "id": 2,
          "company": "Bank of America Merrill Lynch",
          "title": "Trader",
          "start": "2017",
          "end": "2018",
          "city": "New York",
          "state": "NY",
          "description": "It sucked more"
        },
        {
          "id": 1,
          "company": "US Air Force",
          "title": "Computer Scientist",
          "start": "2016",
          "end": "2017",
          "city": "Rome",
          "state": "NY",
          "description": "It sucked"
        }
      ],
      "skills": [
        {
          "id": 1,
          "name": "Javascript",
          "proficiency": "Expert"
        },
        {
          "id": 2,
          "name": "Ruby",
          "proficiency": "Advanced"
        }
      ],
      "education": [
        {
          "id": 1,
          "university": "Yale",
          "degree": "BS",
          "concentration": "Computer Science & Math",
          "start": "2012",
          "end": "2016"
        },
        {
          "id": 2,
          "university": "Flatiron",
          "degree": "N/A",
          "concentration": "Software Development",
          "start": "2019",
          "end": "2020"
        }
      ],
      "projects": [
        {
          "id": 1,
          "title": "Title 1",
          "description": "blah blah blah ONE",
          "link": "here's 1 link",
          "image": "here's 1 image"
        },
        {
          "id": 2,
          "title": "Title 2",
          "description": "blah blah blah",
          "link": "here's a link",
          "image": "here's an image"
        }
      ],
      "websites": [
        {
          "id": 1,
          "link": ""
        },
        {
          "id": 2,
          "link": ""
        },
        {
          "id": 3,
          "link": ""
        }
      ],
      "addresses": [
        {
          "id": 1,
          "street1": "260 Washington Ave",
          "street2": "Apt D2",
          "city": "Brook;yn",
          "state": "NY",
          "zip": "11205",
          "country": "United States"
        }
      ]
    }
  }