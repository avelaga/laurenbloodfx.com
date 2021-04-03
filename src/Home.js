import React, { Component } from 'react'
import Columned from "react-columned";
import Header from './components/Header.js';
import { projects } from './images.js';

export class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="content">
        this is the home page
        <Columned columns={4} className="gallery">
      {projects.map((value, index) => {
        return <a key={index} href={"projects/"+value["url"]}><img  className="gallery-img" src={value["cover"]} /></a>
      })}
    </Columned>
        </div>
      </div>
    )
  }
}

export default Home
