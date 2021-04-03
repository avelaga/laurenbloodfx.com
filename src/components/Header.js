import React, { PureComponent } from 'react'
import './components.css';

export class Header extends PureComponent {
  render() {
    return (
      <div className="header">
        <a href="/"><h1>LAUREN BLOOD</h1></a><br/>
          <h2>PRACTICAL FX MAKEUP</h2>
          <div className="nav-link">
          <a href="/">Projects</a>
          <a href="/contact">Contact</a>
          <a href="/on-setwork">On-Set Work</a>
        </div>
      </div>
    )
  }
}

export default Header
