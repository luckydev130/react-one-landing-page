import React, { Component, Fragment } from 'react';
import './style.css';
import Card from '../card';
import AccessButton from '../access-button';

class CardList extends Component {
  constructor(props) {
    super(props);
  }

  getIntro() {
    return (
      <div class="intro">
        <h1 class="heading-01">This is Petal. A simple, no-fee credit card.</h1>
        <div class="p1-small">
          High credit limits, great rates, no credit score required.
        </div>
        <AccessButton />
        <a href="#pricing-details" class="pricing-details">
          <div class="text-block-pricing">See pricing details</div>
          <img
            src="https://global-uploads.webflow.com/59b058f08eeafc0001398a66/59c04d88221db50001e7bc77_ic_tag%402x.png"
            width="18"
          />
        </a>
      </div>
    );
  }

  getCardText1() {
    return (
      <div class="card-text">
        <h1 class="column-text">Get credit, without a credit score.</h1>
        <p class="p1">
          Petal is not like other cards. We look at the money you make and the
          bills you already pay to help you qualify instantly. That means you
          can get a great credit card and start building your credit score, even
          if Petal is your first credit card. It’s that easy.
        </p>
      </div>
    );
  }

  getCardText2() {
    return (
      <div class="card-text">
        <h1 class="column-text">
          You think in dollars, not interest rates. So do we.
        </h1>
        <p class="p1">
          Petal helps you track what you spend and what you can afford. Pay your
          full bill each month straight from your bank account and never pay a
          dime in interest.
        </p>
        <p class="p1">
          Prefer to pay over time? Petal tells you exactly what it will cost in
          dollars, so you can make the payment that’s right for you.
        </p>
      </div>
    );
  }

  render() {
    const intro = this.getIntro();
    const cardText1 = this.getCardText1();
    const cardText2 = this.getCardText2();
    return (
      <Fragment>
        <Card sectionId={0} content={intro} />
        <Card
          imgSrc="https://global-uploads.webflow.com/59b058f08eeafc0001398a66/5abbb963c827a6b628292ed3_petal-card.png"
          backgroundColor="#b3ebfa"
          sectionId={1}
          content={cardText1}
        />
        <Card
          imgSrc="https://global-uploads.webflow.com/59b058f08eeafc0001398a66/5ababd4454d3dfdb94102b3b_petal-ui-p-1080.png"
          backgroundColor="#ffcad0"
          sectionId={2}
          content={cardText2}
        />
      </Fragment>
    );
  }
}

export default CardList;
