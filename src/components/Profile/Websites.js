import React, { Component } from 'react';
import { Grid, Icon } from 'semantic-ui-react';

class Websites extends Component {
  getIconName = link => {
    let base = link.split('.')[1].toLowerCase();
    switch (base) {
      case 'linkedin':
        return 'linkedin';
      case 'medium':
        return 'medium';
      case 'github':
        return 'github';
      case 'instagram':
        return 'instagram';
      case 'tumblr':
        return 'tumblr';
      case 'facebook':
        return 'facebook';
      case 'google':
        return 'google plus g';
      case 'last':
        return 'lastfm';
      case 'spotify':
        return 'spoitify';
      case 'blogger':
        return 'blogger';
      default:
        return 'linkify';
    }
  };

  renderIcons = () => {
    return this.props.sites.map(site => {
      return (
        <Grid.Column textAlign="left" key={site.id}>
          <a target="_blank" rel="noopener noreferrer" href={site.link}>
            <Icon size="large" name={this.getIconName(site.link)} />{' '}
          </a>
        </Grid.Column>
      );
    });
  };

  render() {
    return (
      <Grid
        textAlign="center"
        style={{ maxheight: '100vh' }}
        verticalAlign="top"
      >
        <Grid.Row>{this.renderIcons()}</Grid.Row>
      </Grid>
    );
  }
}

export default Websites;
