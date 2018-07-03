import React, { Component } from 'react';
import './style.css';

class Footer extends Component {
  render() {
    return (
      <div class="footer">
        <div class="footer-row">
          <div class="footer-col-a">
            <div class="footer-logo">
              <a href="/" class="footer-logo-link w-inline-block w--current">
                <img
                  src="https://global-uploads.webflow.com/59b058f08eeafc0001398a66/59b058f08eeafc0001398a87_petal-logo%402x.png"
                  width="80"
                />
              </a>
            </div>
          </div>

          <div class="footer-col-b">
            <div class="footer-col-links">
              <div class="footer-col-links-a">
                <ul class="footer-list w-list-unstyled">
                  <li class="list-item-8">
                    <a href="/card-details" class="footer-link-01">
                      Why Petal?
                    </a>
                  </li>
                  <li class="list-item-7">
                    <a href="/about" class="footer-link-01">
                      About Us
                    </a>
                  </li>
                  <li class="list-item-9">
                    <a href="/faq" class="footer-link-01">
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>
              <div class="footer-col-links-b">
                <ul class="footer-list w-list-unstyled">
                  <li class="list-item-12">
                    <a href="mailto:hello@petalcard.com" class="footer-link-01">
                      Contact Us
                    </a>
                  </li>
                  <li class="list-item-10">
                    <a
                      href="https://www.petalcard.com/careers"
                      class="footer-link-01"
                    >
                      Careers
                    </a>
                  </li>
                </ul>
              </div>
              <div class="footer-col-links-c">
                <ul class="footer-list w-list-unstyled">
                  <li class="list-item-13">
                    <a href="/privacy-policy" class="mini-links">
                      Privacy Policy
                    </a>
                  </li>
                  <li class="list-item-14">
                    <a href="/terms" class="mini-links">
                      Terms of Use
                    </a>
                  </li>
                  <li class="list-item-15">
                    <a href="https://nytech.org/made" class="mini-links">
                      Made with ♥&nbsp;in NYC
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="footer-lower-block">
              <div class="social-block-logos">
                <a href="" class="footer-social-link">
                  <img src="https://global-uploads.webflow.com/59b058f08eeafc0001398a66/59b058f08eeafc0001398a89_ic_twitter%402x.png" />
                </a>
                <a href="" class="footer-social-link">
                  <img src="https://global-uploads.webflow.com/59b058f08eeafc0001398a66/59b058f08eeafc0001398aba_ic_instagram%402x.png" />
                </a>
                <a href="" class="footer-social-link">
                  <img src="https://global-uploads.webflow.com/59b058f08eeafc0001398a66/59b058f08eeafc0001398ab4_ic_facebook%402x.png" />
                </a>
              </div>
              <div class="terms">
                <img src="https://global-uploads.webflow.com/59b058f08eeafc0001398a66/59b058f08eeafc0001398a9f_ic_visa%402x.png" />
              </div>
            </div>
            <div class="footer-list-copyright">
              © 2018 Petal Card, Inc. The Petal credit card is issued by
              WebBank, Member FDIC.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
