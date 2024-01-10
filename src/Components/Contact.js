import React from 'react'
import Email from '../Assets/email.png'
import LinkedIn from '../Assets/linkedin.png'

function Contact() {
  return (
    <section id="contact">
      <p className="section__text__p1">Me Mande Uma</p>
      <h1 className="title">Mensagem</h1>
      <div className="contact-info-upper-container">
        <div className="contact-info-container">
          <img src={Email} alt="Email icon" className="icon contact-icon email-icon" />
          <p><a href="mailto:examplemail@gmail.com">henrique.danielb@gmail.com</a></p>
        </div>
        <div className="contact-info-container">
          <img src={LinkedIn} alt="LinkedIn icon" className="icon contact-icon" />
          <p><a href="https://www.linkedin.com">LinkedIn</a></p>
        </div>
      </div>
    </section>
  )
}

export default Contact