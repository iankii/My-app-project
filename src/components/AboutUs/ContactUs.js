import React from 'react';
import InputBox from '../GlobalComponents/InputBox';
import Button from '../GlobalComponents/Button';
import Error from '../Error/Error';
 
class ContactUs extends React.Component {
  onclick() {
    var error = document.getElementsByClassName('error-message');
    error[0].classList.toggle('hidden', (this.validateName() && this.validateEmail()));
  }

  validateEmail() {
    let email = document.getElementsByClassName('input-email')[0];
    let validEmail = (/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(email.value));
    email.classList.toggle('error-input', !validEmail)
    return validEmail;
  }
  validateName() {
    let name = document.getElementsByClassName('input-name')[0];
    let validName = (/^[A-Za-z\s]+$/).test(name.value);
    name.classList.toggle('error-input', !validName)
    return validName;
  }

  render() {
    return (
      <div className="contact-us">
        <div className="contact-details">
          <div className="contact-title"><span>CONTACT</span></div>
          <div className="contact-intro"><span>I'm a Web Developer.</span></div>
          <div className="contact-email"><span>email - ankit.pal2011@gmail.com</span></div>
        </div>
        <div className="contact-form">
          <div className="required-fields">
            <InputBox name="input-name" placeholder="Name" />
            <InputBox name="input-email" placeholder="Email" />
          </div>
          <InputBox name="input-subject" placeholder="Subject" />
          <InputBox name="input-message" placeholder="Message" />
          <Error  errorMessage="Please enter valid inputs"/>
          <Button onclick={this.onclick.bind(this)}/>
        </div>
      </div>
    )
  }
}

export default ContactUs;