import React, { Component } from 'react';
import {isValidVideo} from '../Utils/helpers'
import logo from '../logo.png';

class Image extends Component{

constructor(props) {
    super(props)
    this.state = {
      hasVideo : false
    }
  }

componentDidMount() {
    isValidVideo(this.props.video_id)
      .then(result => {this.setState({ hasVideo: result})});
}

render() {
       return  (0 === this.props.video_id.length || !this.state.hasVideo) ?
        
         (
            <img src={logo} alt="Studio Ghibli Logo"/>
         ) :

         (
            <React.Fragment>
                 <a href={`https://youtu.be/${this.props.video_id}`} onClick={this.props.onShowVideo}>
                    <img alt={`${this.props.title} Trailer Preview`} id={this.props.video_id} src={`https://img.youtube.com/vi/${this.props.video_id}/hqdefault.jpg`}  /> 
                 </a>
            </React.Fragment>

         )
  
    }
}

export default Image;