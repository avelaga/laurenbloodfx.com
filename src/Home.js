import React, { Component } from 'react'
import Columned from "react-columned";
import Header from './components/Header.js';
import { images} from './images.js';
// import img1 from '../dist/images/img1.jpg';

export class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="content">
        this is the home page
        <Columned columns={4} className="gallery">
          {/* <img src={img1}/> */}
      {images.map((value, index) => {
        return <img key={index} className="gallery-img" src={value} />
      })}
    </Columned>
        </div>
      </div>
    )
  }
}

export default Home
