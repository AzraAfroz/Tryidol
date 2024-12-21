import React, { useState } from 'react';

const FeedbackForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple form validation
    if (!name || !email || !message) {
      setErrors('All fields are required.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setErrors('Please enter a valid email address.');
      return;
    }

    // Clear error message
    setErrors('');
    // Call the onSubmit prop to submit the form
    onSubmit(name);
    // Clear form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="feedback-form">
      <h2>Feedback Form</h2>
      {errors && <p className="error">{errors}</p>}
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Message:</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
