// import React, { useState, useEffect } from 'react';
// import GreetingPopup from './GreetingPopup';
// import FeedbackForm from './FeedbackForm';
// import ThankYouPopup from './ThankYouPopup';
// import './App.css';

// const App = () => {
//   const [showGreeting, setShowGreeting] = useState(true);
//   const [showThankYou, setShowThankYou] = useState(false);
//   const [userName, setUserName] = useState('');
//   const [greetingMessage, setGreetingMessage] = useState('');

//   // Calculate greeting message based on the current time
//   const getGreetingMessage = () => {
//     const hours = new Date().getHours();
//     if (hours >= 5 && hours < 12) return 'Good Morning!';
//     if (hours >= 12 && hours < 17) return 'Good Afternoon!';
//     if (hours >= 17 && hours < 21) return 'Good Evening!';
//     return 'Good Night!';
//   };

//   useEffect(() => {
//     // Set greeting message when the component mounts
//     setGreetingMessage(getGreetingMessage());
//   }, []);

//   // Handle closing the greeting popup
//   const closeGreetingPopup = () => {
//     setShowGreeting(false);
//   };

//   // Handle closing the thank you popup
//   const closeThankYouPopup = () => {
//     setShowThankYou(false);
//   };

//   // Feedback submission handler
//   const handleFormSubmit = (name) => {
//     setUserName(name);
//     setShowThankYou(true);
//   };

//   return (
//     <div className="App">
//       {showGreeting && (
//         <GreetingPopup
//           message={greetingMessage}
//           closePopup={closeGreetingPopup}
//         />
//       )}

//       <FeedbackForm onSubmit={handleFormSubmit} />

//       {showThankYou && (
//         <ThankYouPopup userName={userName} closePopup={closeThankYouPopup} />
//       )}
//     </div>
//   );
// };

// export default App;


import React, { useState, useEffect } from 'react';
import GreetingPopup from './GreetingPopup';
import FeedbackForm from './FeedbackForm';
import ThankYouPopup from './ThankYouPopup';
import './App.css';

const App = () => {
  const [showGreeting, setShowGreeting] = useState(true);
  const [showThankYou, setShowThankYou] = useState(false);
  const [userName, setUserName] = useState('');
  const [greetingMessage, setGreetingMessage] = useState('');

  // Calculate greeting message based on the current time
  const getGreetingMessage = () => {
    const hours = new Date().getHours();
    if (hours >= 5 && hours < 12) return 'Good Morning!';
    if (hours >= 12 && hours < 17) return 'Good Afternoon!';
    if (hours >= 17 && hours < 21) return 'Good Evening!';
    return 'Good Night!';
  };

  useEffect(() => {
    // Set greeting message when the component mounts
    setGreetingMessage(getGreetingMessage());
  }, []);

  // Handle closing the greeting popup
  const closeGreetingPopup = () => {
    setShowGreeting(false);
  };

  // Handle closing the thank you popup
  const closeThankYouPopup = () => {
    setShowThankYou(false);
  };

  // Feedback submission handler
  const handleFormSubmit = (name) => {
    setUserName(name);
    setShowThankYou(true);
  };

  return (
    <div className="App">
      {showGreeting && (
        <GreetingPopup
          message={greetingMessage}
          closePopup={closeGreetingPopup}
        />
      )}

      {showThankYou && (
        <ThankYouPopup
          userName={userName}
          closePopup={closeThankYouPopup}
        />
      )}

      <FeedbackForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default App;
