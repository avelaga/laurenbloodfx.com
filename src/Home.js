import React, { Component } from 'react'
import Columned from "react-columned";
import Header from './components/Header.js';
import MediaQuery from 'react-responsive';
import { projects, numColumns } from './projects.js';

export class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="content">
        <div className="page-title">PROJECTS</div>

        {/* desktop */}
        <MediaQuery minDeviceWidth={500}>
        <Columned columns={numColumns} className="gallery">
        {projects.map((value, index) => {
        return <a key={index} href={"projects/"+value["url"]}><img  className="gallery-img" src={value["cover"]} /></a>
        })}
      </Columned>
      </MediaQuery>

      {/* mobile */}
      <MediaQuery maxDeviceWidth={500}>
        <Columned columns={1} className="gallery">
        {projects.map((value, index) => {
        return <a key={index} href={"projects/"+value["url"]}><img  className="gallery-img" src={value["cover"]} /></a>
        })}
      </Columned>
      </MediaQuery>
        </div>
      </div>
    )
  }
}

export default Home
