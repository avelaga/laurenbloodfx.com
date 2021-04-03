import React, { Component } from 'react';
import Header from '../components/Header.js';
import { projects } from '../projects.js';

export class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgs: [],
      text: "",
      id: this.props.match.params.id
    };
  }

  componentDidMount() {
    for(var i = 0; i < projects.length; i++) {
      var obj = projects[i];
      if(obj.url == this.state.id){
        this.setState({
          imgs: obj.imgs,
          text: obj.text
        })
      } 
    }
  }

  render() {
    return (
      <div>
        <Header />
        <div className="content">
          {this.state.id}<br/>
          {this.state.text}<br/>

          {this.state.imgs.map((value, index) => {
        return <img key={index} className="project-img" src={value} />
      })}
          </div>
      </div>
    )
  }
}

export default Project
