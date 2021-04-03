import React, { Component } from 'react';
import Header from '../components/Header.js';

export class Project extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="content">this is the project page {this.props.match.params.id}</div>
      </div>
    )
  }
}

export default Project
