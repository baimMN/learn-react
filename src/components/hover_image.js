/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { } from 'react';
import LazyImage from './lazy_image';
import {Motion, spring} from 'react-motion';

export default class HoverComp extends React.Component {
  constructor() {
    super();
    this.state = {
      isHover: false,
    };
    this.handleHover = this.handleHover.bind(this);
    this.getSpringProps = this.getSpringProps.bind(this);
  }
  handleHover(active) {
    this.setState({isHover: active});
  }
  getSpringProps() {
    return {
      defaultStyle: {
        scale: 1,
        marginTop: 25,
        imageOpacity: 0.7,
        opacity: 0,             
      },
      style:{
        scale: spring(this.state.isHover ? 1.15 : 1),
        marginTop: spring(this.state.isHover ? 22 : 25),
        imageOpacity: spring(this.state.isHover ? 0.4 : 0.7),
        opacity: spring(this.state.isHover ? 1 : 0),
      },
    };
  }
  render() {
    return (
      <div className='container' key={this.props.keyImage}>
        <Motion {...this.getSpringProps()}>
          {tweenCollection => {
            let styleImage = {
              transform: 'scale(' + tweenCollection.scale + ')',
              opacity: tweenCollection.imageOpacity,
            };
            let styleTitle = {
              marginTop: tweenCollection.marginTop + '%',
            };
            let styleSubtitle = {
              opacity: tweenCollection.opacity,
            };
            return (
              <div className='subcontainer'>
                <div
                  className='containerImage'
                  onMouseOver={this.handleHover.bind(null, true)} 
                  onMouseOut={this.handleHover.bind(null, false)}>
                  <LazyImage
                    style={styleImage}
                    src={this.props.imageSrc}
                    key={this.props.keyImage}
                    alt='test aja'
                    className={`img ${this.props.className}`} />
                  <div className='overlay'>
                    <div className='title' style={styleTitle}>{this.state.isHover && this.props.title}</div>
                    <div className='subtitle' style={styleSubtitle}>
                      <div className='subtitleText'>{this.props.subtitle}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }}
        </Motion>
      </div>
    );
  }
}