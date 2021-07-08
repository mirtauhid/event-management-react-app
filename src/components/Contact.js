import emailjs from 'emailjs-com';
import React from 'react';
import './Contact.css';

const Contact = () => {

  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_by2hdfb",
        "template_e7hi9xm",
        e.target,
        "user_rSIvI0uaK1remLAOavSKX"
      )

      .then(
        function (response) {
          alert("SUCCESS!", response.status, response.text);
          document.getElementById('supForm').reset();
        },
        function (error) {
          console.log("FAILED...", error);
          document.getElementById('supForm').reset();
        }
      );
  }

  return (
    <div id="contact">
      <div class="contact-form">
      <div class="first-container">
        <div class="info-container">
          <div><img class="icon"/>
            <h3>Address</h3>
            <h3>LOUD Entertainment Parties</h3>
          </div>
          <div> <img class="icon"/>
            <h3>Lets Talk</h3>
            <p>Tel: (917) 468.2276 New York,</p>
            <p>NY 10004</p>
          </div>
          <div><img class="icon"/>
            <h3>General Query</h3>
            <p>booking@loudentparties.com</p>
          </div>
        </div>
      </div>
      <div class="second-container">
        <h2>Send Us A Message</h2>
        <form onSubmit={sendEmail} id="supForm" >
          <div class="form-group">
            <label for="name-input">Tell us your name*</label>
            <input id="name-input" name="name-input" type="text" placeholder="First name" required="required"/>
            <input type="text" id="last-name" name="last-name"placeholder="Last name" required="required"/>
          </div>
          <div class="form-group">
            <label for="email-input">Enter your email*</label>
            <input id="email-input"  name="email-input" type="text" placeholder="Eg. example@email.com" required="required"/>
          </div>
          <div class="form-group">
            <label for="phone-input">Enter phone number*</label>
            <input id="phone-input" name="phone-input" type="text" placeholder="Eg. +1 800 000000" required="required"/>
          </div>
          <div class="form-group">
            <label for="budget-input">Your budget</label>
            <input id="budget-input" name="budget-input" type="text"></input>
          </div>
          <div class="form-group">
            <label for="text">Message</label>
            <textarea id="text" name="text"  placeholder="Write us a message"></textarea>
          </div>
          <button type="submit" value="send" >Submit</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Contact;