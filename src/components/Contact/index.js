import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import emailjs from "emailjs-com"

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState('');


  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
      console.log('Form', formState);

      emailjs.sendForm('service_qe6jyqf', 'template_cily96n', e.target, 'user_Ooz2HTl2XsHhJBR6McmRY')
      .then((result) => {
          console.log(result.text);
          alert("Email Sent!")
          e.target.reset()
      }, (error) => {
          console.log(error.text);
      });
      
    }
  };

  return (
    <section>
      <h1>Contact me</h1>
      <form  id="contact-form" onSubmit={handleSubmit} style={{ marginLeft:"10px"}}>
        <div style={{ justifyContent: "left", display: "flex", }}>
          <div style={{ justifyContent: "space-between",width:"25%" , display: "flex", }}>
            <label htmlFor="name">Name:</label>
            <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
          </div>
        </div>
        <div style={{ justifyContent: "left", display: "flex"}}>
          <div style={{ justifyContent: "space-between",width:"25%" , display: "flex", }}> 
            <label htmlFor="email">Email address:</label>
            <input type="email" defaultValue={email} name="email" onBlur={handleChange} />
          </div>
        </div>
        <div style={{ justifyContent: "left", display: "flex", }}>
          <div className= "message-box" >
          <label htmlFor="message">Message:</label>
          <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5" />
        </div>
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;