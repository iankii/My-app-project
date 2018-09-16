import React, { Component } from 'react';

import { SlideArrow } from './../SlideArrows/SlideArrows'
import Slidemage from './SlideImage'

import sliderStyle from './slider.css'

class Slider extends Component {
  constructor(props) {
    super(props);
    this.slideIndex = 1;
  }

  minusSlides() {
    this.showSlides(this.slideIndex -= 1);
  }

  plusSlides() {
    this.showSlides(this.slideIndex += 1);
  }

  currentSlide(n) {
    this.showSlides(this.slideIndex = n);
  }

  showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { this.slideIndex = 1 }
    if (n < 1) { this.slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[this.slideIndex - 1].style.display = "block";
  }

  timeSlide() {
    this.slideIndex += 1;
    this.showSlides(this.slideIndex);
  }

  componentDidMount() {
    this.showSlides(this.slideIndex);
    setInterval(this.timeSlide.bind(this), 5000)
  }

  render() {
    var values = this.props.highlights.map(function(value, i){
      return (
        <div className="slide-container" key={i}>
          <Slidemage imageDetails={value} />
        </div>
      );
    });

    return (
      <div className="slider-container" style={sliderStyle}>
        <div className="left-slide" onClick={this.minusSlides.bind(this)}>
          <SlideArrow arrow="left-arrow" />
        </div>
        <div className="right-slide" onClick={this.plusSlides.bind(this)}>
          <SlideArrow arrow="right-arrow" />
        </div>
        <div className="slider-content">
          <div className="slideshow-container">
            {values}
          </div>
        </div>
      </div>
    )
  }
}

export default Slider;