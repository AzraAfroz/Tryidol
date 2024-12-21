// import React from 'react';
// import Modal from 'react-modal';

// const GreetingPopup = ({ message, closePopup }) => {
//   return (
//     <Modal isOpen={true} onRequestClose={closePopup} contentLabel="Greeting Popup">
//       <div className="greeting-popup">
//         <h2>{message}</h2>
//         <button onClick={closePopup}>Close</button>
//       </div>
//     </Modal>
//   );
// };

// export default GreetingPopup;



import React from 'react';
import Modal from 'react-modal';

const GreetingPopup = ({ message, closePopup }) => {
  return (
    <Modal
      isOpen={true}
      onRequestClose={closePopup}
      contentLabel="Greeting Popup"
      className="greeting-popup-modal"
      overlayClassName="greeting-overlay"
    >
      <div className="greeting-popup">
        <h2>{message}</h2>
        <button onClick={closePopup}>Close</button>
      </div>
    </Modal>
  );
};

export default GreetingPopup;
