import React, { Component } from 'react'
import Columned from "react-columned";
import Header from './components/Header.js';
import MediaQuery from 'react-responsive';
import Lightbox from 'react-image-lightbox';
import { images, numColumns } from './projects.js';
import 'react-image-lightbox/style.css';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  mapImages(cols, images) {
    return <Columned columns={cols} className="gallery">
        {images.map((value, index) => {
        return <img key={index} className="gallery-img" onClick={() => this.setState({ isOpen: true, photoIndex: index })} src={value} />
        })}
      </Columned>
  }

  render() {
    const { photoIndex, isOpen } = this.state;
    return (
      <div>
        <Header />
        <div className="content">
        <div className="page-title">PROJECTS</div>

      {/* desktop */}
      <MediaQuery minDeviceWidth={500}>{this.mapImages(numColumns, images)}</MediaQuery>

      {/* mobile */}
      <MediaQuery maxDeviceWidth={500}>{this.mapImages(1, images)}</MediaQuery>
      {isOpen && (
              <Lightbox
                mainSrc={images[photoIndex]}
                nextSrc={images[(photoIndex + 1) % images.length]}
                prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                onCloseRequest={() => this.setState({ isOpen: false })}
                onMovePrevRequest={() =>
                  this.setState({
                    photoIndex: (photoIndex + images.length - 1) % images.length,
                  })
                }
                onMoveNextRequest={() =>
                  this.setState({
                    photoIndex: (photoIndex + 1) % images.length,
                  })
                }
              />
            )}
            </div>
            </div>
    )
  }
}

export default Home
