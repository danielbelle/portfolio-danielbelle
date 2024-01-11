import React, { useRef, useState } from 'react'
import Email from '../Assets/email.png'
import LinkedIn from '../Assets/linkedin.png'
import emailjs from '@emailjs/browser'

function Contact() {
  const form = useRef();
  const [input, setInput] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    if (input === '') {
      alert("Preencha um e-mail válido!")
      return;
    }

    try {
      emailjs.sendForm('service_s8nljg4', 'template_v0sr4jm', form.current, '2ip1oI5hY4jTjN8JS').then((result) => {
        alert('Seu e-mail foi recebido, logo estaremos respondendo! Até mais!')
      }, (error) => {
        alert(error.text)
      })
      setInput("");

    } catch {
      alert("Tivemos algum erro no e-mail, favor reencaminhar =(");
      setInput("");
    }


  }
  return (
    <section id="contact">
      <p className="section__text__p1">Me Encaminhe Seu</p>
      <h1 className="title">E-mail</h1>
      <div className="contact-info-upper-container">
        <div className="contact-info-container">
          <img src={Email} alt="Ícone E-mail" className="icon contact-icon" />
          <form ref={form} onSubmit={sendEmail}>
            <div className='contact-form-container'>
              <input type='email' name='user_email' value={input} onChange={(e) => setInput(e.target.value)} placeholder='seu-email@gmail.com'></input>
              <input className='submit-button' type='submit' value={'Enviar'} />
            </div>
          </form>
        </div>
        {/* <div className="contact-info-container">
          <img src={LinkedIn} alt="LinkedIn icon" className="icon contact-icon" />
          <p><a href="http://www.linkedin.com/in/danielhenriquebelle/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
          </div>*/}
      </div>
    </section>
  )
}

export default Contact