import React, { Component } from 'react'
import Columned from "react-columned";
import Header from './components/Header.js';
import MediaQuery from 'react-responsive';
import { images, numColumns } from './projects.js';

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
        {images.map((value, index) => {
        return <img key={index} className="gallery-img" src={value} />
        })}
      </Columned>
      </MediaQuery>

      {/* mobile */}
      <MediaQuery maxDeviceWidth={500}>
      <Columned columns={1} className="gallery">
        {images.map((value, index) => {
        return <img key={index} className="gallery-img" src={value} />
        })}
      </Columned>
      </MediaQuery>
        </div>
      </div>
    )
  }
}

export default Home
