"use client"
import React, { useState } from 'react'
import "../css/contact.css"

const Contact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit =(e: React.FormEvent)=>{

    e.preventDefault();
    setName("");
    setEmail("");
    setMessage("");
  }

  return (

    <section className='contact-section' id='contact'>
      <h1>Contact Us</h1>

      <div className='contact-container'>

        <form className='contact-form' onSubmit={handleSubmit}>

          <label>Name</label>
          <input type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)} />

          <label>Email</label>
          <input type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} />

          <label>Message</label>
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)} />

          <button type="submit">Send Message</button>

        </form>

      </div>
    </section>
  )
}

export default Contact