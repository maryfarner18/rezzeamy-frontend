import React, { Component } from 'react';
import About from '../components/Profile/About';
import Education from '../components/Profile/Education';
import Skills from '../components/Profile/Skills';
import Projects from '../components/Profile/Projects';
import WorkExperience from '../components/Profile/WorkExperience';
import EditForm from '../components/Profile/EditForm';
import { Button, Icon } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

import {API} from '../App'

class Profile extends Component {
  handleEditButtonClick = () => {
    this.props.history.push('/edit');
    window.scrollTo(0, 0);
  };

  handleDeleteButtonClick = () =>{
      fetch(`${API}/users/${this.props.currentUser.user.id}`, {
          method: "DELETE",
          headers: {
              'content-type': "application/json",
              "accepts": "application/json"
          }
      })
      .then(resp => resp.json())
      .then(data => {
          this.props.setUser({})
          this.props.history.push("/")
      }).catch(console.log)
  }

  renderEditForm = () => {
    return (
      <EditForm {...this.props.showUser} handleSubmit={this.props.submitEdit} />
    );
  };

  renderEditDeleteButton = () => {
    return this.props.currentUser.user &&
      this.props.currentUser.user.user_slug ===
        this.props.showUser.user.user_slug ? (
            <React.Fragment>
                <Button animated="vertical" onClick={this.handleEditButtonClick}>
                    <Button.Content hidden>Edit</Button.Content>
                    <Button.Content visible>
                    <Icon name="edit" />
                    </Button.Content>
                </Button>
                <Button animated="vertical" onClick={this.handleDeleteButtonClick}>
                    <Button.Content hidden>Delete</Button.Content>
                    <Button.Content visible>
                        <Icon name="delete" />
                    </Button.Content>
                </Button>
            </React.Fragment>) 
        : null;
  };

  renderAboutComponent = () => {
    return (
      <About
        showUser={this.props.showUser.user}
        sites={this.props.showUser.websites}
        address={this.props.showUser.addresses[0]}
      />
    );
  };

  renderWorkExperienceComponent = () => {
    return <WorkExperience about={this.props.showUser.work_experiences} />;
  };

  renderSkillsComponent = () => {
    return <Skills skills={this.props.showUser.skills} />;
  };

  renderEducationComponent = () => {
    return <Education educations={this.props.showUser.educations} />;
  };

  renderProjectsComponent = () => {
    return <Projects projects={this.props.showUser.projects} />;
  };

  renderChildComponents = () => {
    return (
      <div style={{ textAlign: 'center' }}>
        {this.renderAboutComponent()}
        {this.renderWorkExperienceComponent()}
        {this.renderSkillsComponent()}
        {this.renderEducationComponent()}
        {this.renderProjectsComponent()}
        {this.renderEditDeleteButton()}
      </div>
    );
  };

  renderComponents = () => {
    return this.props.edit
      ? this.renderEditForm()
      : this.renderChildComponents();
  };

  render() {
    return (
      <React.Fragment>
        {this.renderComponents()}
        <hr></hr>
      </React.Fragment>
    );
  }
}

export default withRouter(Profile);
