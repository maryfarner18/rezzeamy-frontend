import React, {Component } from 'react'
import About from '../components/Profile/About'
import Contact from '../components/Profile/Contact'
import Education from '../components/Profile/Education'
import Skills from '../components/Profile/Skills'
import Projects from '../components/Profile/Projects'
import WorkExperience from '../components/Profile/WorkExperience'


export default class Profile extends Component {
    render() {
        return (
            <div>
                <About firstName={user_profile.user.first_name} lastName={user_profile.user.last_name} email={user_profile.user.email} phone={user_profile.user.phone} />
                <WorkExperience about={user_profile.user.work_experiences} />
                <Skills skills={user_profile.user.skills} />
                <Education education={user_profile.user.education} />
                <Projects projects={user_profile.user.projects} />
                <Contact resources={user_profile.user.websites} addresses={user_profile.user.addresses} />
            </div>
        )
    }
}

const user_profile = {
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
        "company": "US Air Force",
        "title": "Computer Scientist",
        "start": "2016",
        "end": "2017",
        "city": "Rome",
        "state": "NY",
        "description": "It sucked"
      },
      {
        "company": "Bank of America Merrill Lynch",
        "title": "Trader",
        "start": "2017",
        "end": "2018",
        "city": "New York",
        "state": "NY",
        "description": "It sucked more"
      }
    ],
    "skills": [
      {
        "name": "Javascript",
        "proficiency": "Expert"
      },
      {
        "name": "Ruby",
        "proficiency": "Advanced"
      }
    ],
    "education": [
      {
        "university": "Yale",
        "degree": "BS",
        "concentration": "Computer Science & Math",
        "start": "2012",
        "end": "2016"
      },
      {
        "university": "Flatiron",
        "degree": "N/A",
        "concentration": "Software Development",
        "start": "2019",
        "end": "2020"
      }
    ],
    "projects": [
      {
        "title": "Title 1",
        "description": "blah blah blah ONE",
        "link": "here's 1 link",
        "image": "here's 1 image"
      },
      {
        "title": "Title 2",
        "description": "blah blah blah",
        "link": "here's a link",
        "image": "here's an image"
      }
    ],
    "websites": [
      {
        "link": "",
        "icon": "",
        "site": "LinkedIn"
      },
      {
        "link": "",
        "icon": "",
        "site": "Github"
      },
      {
        "link": "",
        "icon": "",
        "site": "Medium"
      }
    ],
    "addresses": [
      {
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