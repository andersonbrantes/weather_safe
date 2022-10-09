import React, { Component } from 'react';
import { EventModal } from '../event_modal';

import MapPage from '../../pages/MapPage';

export class MapContainer extends Component {
  state = { isShown: false, position: null };
  showModal = (position) => {
    this.setState({ isShown: true, position: position }, () => {
      this.closeButton.focus();
    });
    this.toggleScrollLock();
  };
  closeModal = () => {
    this.setState({ isShown: false });
    this.toggleScrollLock();
  };
  onKeyDown = (event) => {
    if (event.keyCode === 27) {
      this.closeModal();
    }
  };
  onClickOutside = (event) => {
    if (this.modal && this.modal.contains(event.target)) return;
    this.closeModal();
  };

  toggleScrollLock = () => {
    document.querySelector('html').classList.toggle('scroll-lock');
  };
  render() {
    return (
      <React.Fragment>
        <MapPage onClick={this.showModal}/>

        {this.state.isShown ? (
          <EventModal
            onSubmit={this.props.onSubmit}
            modalRef={(n) => (this.modal = n)}
            buttonRef={(n) => (this.closeButton = n)}
            closeModal={this.closeModal}
            onKeyDown={this.onKeyDown}
            onClickOutside={this.onClickOutside}
            position={this.state.position}
          />
        ) : null}
      </React.Fragment>
    );
  }
}

export default MapContainer;
