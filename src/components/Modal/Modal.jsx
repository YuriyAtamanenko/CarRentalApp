import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, ModalContainer } from './Modal.styled';
// import PropTypes from 'prop-types';

const rootModal = document.querySelector('#root-modal');

export default function Modal({ onCloseModal, info }) {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onCloseModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onCloseModal]);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onCloseModal();
    }
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <ModalContainer>Modal</ModalContainer>
    </Backdrop>,
    rootModal
  );
}
