import React from 'react';

function Contact() {
  const showAlert = (e) => {
    e.preventDefault();
    alert("Thank you for contacting us! We'll get back to you soon.");
  };

  return (
    <div className="Form">
      <div className="Formheading">
        <p>Contact Me?</p>
      </div>
      <div className="Formlogin">
        <form onSubmit={showAlert}>
          <input type="text" name="fname" placeholder="Firstname" /><br /><br />
          <input type="text" name="lname" placeholder="Lastname" /><br /><br />
          <textarea name="message" rows="10" cols="30" placeholder="Your Enquiries"></textarea><br /><br />
          <button type="submit">Send A Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
