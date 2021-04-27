import React, { Component } from 'react';
import Columned from "react-columned";
import MediaQuery from 'react-responsive';
import { onSetWork } from '../setWork.js';
import Header from '../components/Header.js';
import ScriptTag from 'react-script-tag';
import './pages.css';

export class OnSetWork extends Component {

  render() {
    return (
      <div > 
        <ScriptTag type="text/javascript" src="sketch.js"/>
        <Header />
        <div className="content">
        <div className="page-title">ON-SET WORK</div>
        Links to the films/shows I've done SFX work on.

        {/* desktop */}
        <MediaQuery minDeviceWidth={500}>
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
    </MediaQuery>

    {/* mobile */}
    <MediaQuery maxDeviceWidth={500}>
          <Columned columns={1} className="gallery">
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
    </MediaQuery>
        </div>
      </div>
    )
  }
}

export default OnSetWork
