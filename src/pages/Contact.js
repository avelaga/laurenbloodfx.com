import React, { Component } from 'react';
import Header from '../components/Header.js';
import contactImg from '../../dist/images/contact.jpg';
import './pages.css';

export class Contact extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="content contact-page">
          <div className="page-title">CONTACT</div>
          <div className="contact-text">
          I'm Lauren, I go to UT Austin for Radio-Television-Film, and I love practical FX and helping out on sets whenever I can! Most of my work is with liquid latex, 3rd Degree, and bruise palettes, but I also have experience with bald caps, prosthetics, and alcohol palettes and am always learning more and how to use new mediums. Feel free to reach out if you need FX on your set!
          <br />
          E-mail: laurenblood83@gmail.com
          </div>
          <img src={contactImg} className="contact-img"/>
        </div>
      </div>
    )
  }
}

export default Contact
