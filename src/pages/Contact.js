import React, { Component } from 'react';
import Header from '../components/Header.js';
import './pages.css';

export class Contact extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="content">
          this is the contact page
        </div>
      </div>
    )
  }
}

export default Contact
