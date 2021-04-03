import React, { Component } from 'react';
import Columned from "react-columned";
import { onSetWork } from '../setWork.js';
import Header from '../components/Header.js';
import './pages.css';

export class OnSetWork extends Component {
  render() {
    return (
      <div style={{marginLeft: "15px"}}> 
      {/* bandaid solution for page alignment bug */}
        <Header />
        <div className="content">
        <div className="page-title">ON-SET WORK</div>
        Links to the films/shows I've done SFX work on.
          <Columned columns={2} className="gallery">
      {onSetWork.map((value, index) => {
        return <div>
          <a key={index} href={value["url"]} target="blank">
            <img className="gallery-img set-img" src={value["cover"]} />
            <div className="set-work-info">
            <div className="set-title"> {value.title}</div>
            <div className="set-director"> by {value.director}</div>
            <div className="set-text"> {value.text}</div>
            </div>
          </a>
          </div>
      })}
    </Columned>
        </div>
      </div>
    )
  }
}

export default OnSetWork
