import React, { Component } from 'react';
import './style.css';
import { Element } from 'react-scroll';
class PriceList extends Component {
  render() {
    return (
      <Element name="3">
        <div id="pricing" class="disclaimer-box">
          <div class="pricing-details-header">
            <p class="heading">Priced just right</p>
            <img
              src="https://global-uploads.webflow.com/59b058f08eeafc0001398a66/59c04e3d6eb47c0001392f52_ic_tag_large%402x.png"
              width="32"
              class="image-35"
            />
          </div>
          <div class="disclaimer-container">
            <div class="disclaimer-column">
              <div class="disclaimer-column-header">Credit Limit</div>
              <h1 class="disclaimer-column-text">$500 – 10,000</h1>
            </div>
            <div class="disclaimer-column">
              <div class="disclaimer-column-header">Credit Limit</div>
              <h1 class="disclaimer-column-text">$500 – 10,000</h1>
            </div>
            <div class="disclaimer-column">
              <div class="disclaimer-column-header">Credit Limit</div>
              <h1 class="disclaimer-column-text">$500 – 10,000</h1>
            </div>
          </div>
          <div class="apr-box">
            <p class="p1-center">
              FYI, APRs are variable based on the U.S. Prime Rate accurate as of
              6/19/2018.
            </p>
          </div>
        </div>
      </Element>
    );
  }
}

export default PriceList;
