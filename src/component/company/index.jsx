import React, { Component } from 'react';
import './style.css';
import AccessButton from '../access-button';

class Company extends Component {
  render() {
    return (
      <div class="company">
        <h1 class="heading-03-center">
          We're a different kind of credit card company.
        </h1>
        <p class="p1-center">
          We started Petal to give credit to people who deserve it – and made it
          honest, simple, and accessible. We cut through all the fine print,
          ditched the fees and created a credit card that makes your life a
          little easier.
        </p>
        <p class="heading-02-center">
          Petal is invitation-only. Sign up to get on the waitlist.
        </p>
        <div class="access-btn-sub-footer">
          <AccessButton />
        </div>
      </div>
    );
  }
}

export default Company;
