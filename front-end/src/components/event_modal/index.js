import React from 'react';
import ReactDOM from 'react-dom';
import { EventRegisterForm } from '../event_register_form';
import FocusTrap from 'focus-trap-react';

export const EventModal = ({
  onClickOutside,
  onKeyDown,
  modalRef,
  buttonRef,
  closeModal,
  position,
  reload
}) => {
  return ReactDOM.createPortal(
    <FocusTrap>
      <aside
        tag="aside"
        role="dialog"
        tabIndex="-1"
        aria-modal="true"
        className="modal-cover"
        onClick={onClickOutside}
        onKeyDown={onKeyDown}
      >
        <div className="modal-area" ref={modalRef}>
          <button
            ref={buttonRef}
            aria-label="Close Modal"
            aria-labelledby="close-modal"
            className="_modal-close"
            onClick={closeModal}
          >
            <span id="close-modal" className="btn btn-sm btn-danger">
              Fechar
            </span>
          </button>
          <div className="modal-body">
            <EventRegisterForm position={position} closeModal={closeModal} reload={reload} />
          </div>
        </div>
      </aside>
    </FocusTrap>,
    document.body
  );
};

export default EventModal;
