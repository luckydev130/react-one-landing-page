import React, { Component } from 'react';
import './style.css';

class AccessForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { show, hideModal } = this.props;
    const showHideClassName = show ? 'modal show' : 'modal hide';

    return (
      <div className={showHideClassName}>
        <button type="button" onClick={hideModal} class="close-button">
          <span aria-hidden="true">×</span>
        </button>
        <div class="modal-content">
          <div class="modal-header">
            <h2 class="prompt-header">Get early access to Petal</h2>
          </div>
          <div class="modal-body">
            <form novalidate="">
              <div class="form-group">
                <input
                  type="text"
                  id="form_firstName"
                  placeholder="First Name *"
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  id="form_email"
                  placeholder="Email Address *"
                />
              </div>
              <button class="add-button">Add me to the list</button>
            </form>
            <div class="tnc">
              <a>
                By subscribing to the waitlist, you agree to our Terms &amp;
                Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AccessForm;
