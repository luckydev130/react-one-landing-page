import React, { Component } from 'react';
import './style.css';
import { Link, Element, Events, scrollSpy } from 'react-scroll';

class Card extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    Events.scrollEvent.register('begin', function(to, element) {
      console.log('begin', arguments);
    });

    Events.scrollEvent.register('end', function(to, element) {
      console.log('end', arguments);
    });

    scrollSpy.update();
  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }
  render() {
    const { imgSrc, backgroundColor, sectionId, content } = this.props;
    const bgClassName = imgSrc ? '' : 'bg';
    return (
      <Element name={sectionId}>
        <div class="section-row">
          <div class="section-column">
            <div class="div-col-a-centered-cards">
              <div
                id="02"
                className={bgClassName}
                style={{
                  backgroundColor: backgroundColor,
                }}
              >
                <div class="div-image-container">
                  <img src={imgSrc} />
                </div>
              </div>
            </div>
          </div>
          <div class="section-column">
            <div class="card-content">
              {content}
              <div class="next-button">
                <Link
                  activeClass="active"
                  to={sectionId + 1}
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  <a href="#" class="link-move-down">
                    <img
                      src="https://global-uploads.webflow.com/59b058f08eeafc0001398a66/59b058f08eeafc0001398ac1_ic_more_black_arrow%402x.png"
                      width="50"
                      class="image-move-down"
                    />
                  </a>
                </Link>

                <div class="div-line" />
              </div>
            </div>
          </div>
        </div>
      </Element>
    );
  }
}

export default Card;
