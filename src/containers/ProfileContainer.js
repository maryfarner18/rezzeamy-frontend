import React, { Component } from 'react';
import Profile from '../components/Profile';
import { FIELD_OBJ } from './FormData';
import { API } from '../App';
import { Redirect, withRouter } from 'react-router-dom';
import { Dimmer, Segment, Loader } from 'semantic-ui-react';

class ProfileContainer extends Component {
  state = {
    showUser: {
      user: { ...FIELD_OBJ.user },
      work_experiences: [{ ...FIELD_OBJ.work_experiences }],
      skills: [{ ...FIELD_OBJ.skills }],
      educations: [{ ...FIELD_OBJ.educations }],
      projects: [{ ...FIELD_OBJ.projects }],
      websites: [{ ...FIELD_OBJ.websites }],
      addresses: [{ ...FIELD_OBJ.addresses }],
    },
    loading: true,
  };

  submitEdit = event => {
    this.setState(
      {
        showUser: { ...event },
      },
      () => this.submitPatch(event),
    );
  };

  submitPatch = obj => {
    fetch(`${API}/users/${obj.user.id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        accept: 'application/json',
      },
      body: JSON.stringify(obj),
    })
      .then(resp => resp.json())
      .then(data => {
        this.props.history.push('/');
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    fetch(`${API}/users/${this.props.userslug}`)
      .then(resp => resp.json())
      .then(json => {
        if (!json.data) {
          this.props.history.push('/404');
        } else {
          this.setState({
            showUser: json.data,
            loading: false,
          });
        }
      })
      .catch(error => {
        return <Redirect to="404" />;
      });
  }

  setUser = json => {
    this.setState({ showUser: json });
  };

  renderLoading = () => {
    return (
      <Segment style={{ minHeight: 100 }}>
        <Dimmer active>
          <Loader indeterminate>Preparing Files</Loader>
        </Dimmer>
      </Segment>
    );
  };

  render() {
    return this.state.loading ? (
      this.renderLoading()
    ) : (
      <Profile
        showUser={this.state.showUser}
        edit={this.props.edit}
        submitEdit={this.submitEdit}
        currentUser={this.props.currentUser}
      />
    );
  }
}

export default withRouter(ProfileContainer);
