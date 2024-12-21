import React from 'react';
import Modal from 'react-modal';

const ThankYouPopup = ({ userName, closePopup }) => {
  return (
    <Modal
      isOpen={true}
      onRequestClose={closePopup}
      contentLabel="Thank You Popup"
      className="thank-you-popup"
      overlayClassName="overlay"
    >
      <h2>Thank you for your feedback, {userName}!</h2>
      <button onClick={closePopup}>Close</button>
    </Modal>
  );
};

export default ThankYouPopup;
