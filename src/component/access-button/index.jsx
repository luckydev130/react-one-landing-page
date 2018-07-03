import React, { Component, Fragment } from 'react';
import './style.css';
import AccessForm from './access-form';

class AccessButton extends Component {
  constructor() {
    super();
    this.state = { show: false };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal() {
    this.setState({ show: true });
  }

  hideModal() {
    this.setState({ show: false });
  }

  render() {
    return (
      <Fragment>
        <div class="button-container">
          <a className="access-button" onClick={this.showModal}>
            Get early access
          </a>
        </div>

        <AccessForm show={this.state.show} hideModal={this.hideModal} />
      </Fragment>
    );
  }
}

export default AccessButton;
