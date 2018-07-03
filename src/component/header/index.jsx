import React, { Component } from 'react';
import './style.css';
import AccessButton from '../access-button';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      showHeader: false,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.headerHeight = document.getElementById('header').offsetHeight;
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    const scrollY = window.scrollY;
    this.setState({
      showHeader: window.scrollY > this.headerHeight,
    });
  }

  render() {
    const showHideClassName = this.state.showHeader
      ? 'floating-nav show-header'
      : 'floating-nav hide-header';
    return (
      <div id="header" className={showHideClassName}>
        <div className="nav-div-block-top">
          <a href="#01" className="w-inline-block">
            <img
              src="https://global-uploads.webflow.com/59b058f08eeafc0001398a66/59b058f08eeafc0001398abe_petal-logo-black%402x.png"
              width="80"
              className="image-37"
            />
          </a>
          <div className="floating-nav-group">
            <a href="#" className="header-nav-link">
              Why Petal?
            </a>
            <a href="#" className="header-nav-link">
              FAQ
            </a>
            <a href="#" className="header-nav-link extra-space">
              About Us
            </a>
            <AccessButton />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
