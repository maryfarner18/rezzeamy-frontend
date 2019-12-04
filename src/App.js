import React from 'react';
import  {withRouter} from 'react-router-dom'

import Main from './containers/Main'
import Nav from './containers/Nav'

class App extends React.Component {
  
  state = {
    isLoggedIn: false,
    currentUser: {
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
    },
    activeItem: ""
  }
  
  setActive = (name) => {
    this.setState({
      activeItem: name
    })
  }

  handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      currentUser: data.user
    })
  }

  handleLogout = () => {
    this.setState({
    isLoggedIn: false,
    currentUser: {}
    })
  }

  loginStatus = () => {
    fetch('http://localhost:3001/logged_in', {
        credentials: 'include'
    })   
   .then(response => {
      if (response.data.logged_in) {
        this.handleLogin(response)
      } else {
        this.handleLogout()
      }
    })
    .catch(error => console.log('api errors:', error))
  }

  setUser = (user) => {
    this.setState({
      currentUser: {...user}
    })
  }

  componentDidMount() {
    this.loginStatus()
  }

  render() {
    return (
      <div>
        <Nav currentUser={this.state.currentUser} setUser={this.setUser} setActive={this.setActive} activeItem={this.state.activeItem}/>
        <Main currentUser={this.state.currentUser} setUser={this.setUser} handleLogin={this.handleLogin} loginStatus={this.loginStatus}/>
      </div>
    );
  }
}

export default withRouter(App); // higher order component
