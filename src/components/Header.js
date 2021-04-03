import React, { PureComponent } from 'react'
import './components.css';

export class Header extends PureComponent {
  render() {
    return (
      <div className="header">
        <a href="/">LAUREN BLOOD SFX</a><br/>
          PRACTICAL FX MAKEUP
          <div className="nav-link">
          <a href="/contact">Contact</a>
          <a href="/on-setwork">On-Set Work</a>
        </div>
      </div>
    )
  }
}

export default Header
