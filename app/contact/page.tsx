import React from 'react'


function    contactForm() {
  return (
    
     <div className="container">
        <br />
        <br />
        <br />
        <br />
    <div className="contact-form">
        <h1 className="lol">Contact Now</h1>
        <form action="https://api.web3forms.com/submit" method="POST" className="contact-form">
            <div className="input-field">
                <input type="hidden" name="access_key" value="bbd9ab85-940d-478a-b813-b58d2d9d8cbc" required/>
                <label htmlFor="name">First Name:</label>
                <input type="text" id="name" name="name" placeholder="Enter your first name" required/>
            </div>
            <div className="input-field">
                <label htmlFor="email">Email Address:</label>
                <input type="email" id="email" name="email" placeholder="Enter your email address" required/>
            </div>
            <div className="input-field">
                <label htmlFor="message">Your Message:</label>
                <textarea id="message" name="message" placeholder="Type your message here..." required></textarea>
            </div>
            <button type="submit" className="btn">Send Message</button>
        </form>
    </div>
</div>
  )
}

export default contactForm;



