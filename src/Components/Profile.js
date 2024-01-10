import React from 'react'
import ProfilePic from '../Assets/profile-pic.png'
import LinkedIn from '../Assets/linkedin.png'
import GitHub from '../Assets/github.png'

function Profile() {
  return (
    <section id="profile">
      <div className="section__pic-container">
        <img src={ProfilePic} alt="Foto de perfil do Daniel" />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Oii, Aqui é o</p>
        <h1 className="title">Daniel H. Bellé</h1>
        <p className="section__text__p2">Dev Full Stack JavaScript</p>
        <div className="btn-container">
          <button className="btn btn-color-2" onclick="window.open('../Assets/resume-example.pdf')</div>">
            Download CV
          </button>
          <button className="btn btn-color-1" onclick="location.href='../#contact'">
            Bora Conversar?
          </button>
        </div>
        <div id="socials-container">
          <img src={LinkedIn} alt="Meu perfil do LinkedIn" className="icon"
            onclick="location.href='https://linkedin.com/henrique.danielb'" />
          <img src={GitHub} alt="Meu perfil do GitHub" className="icon"
            onclick="location.href='https://github.com/danielbelle'" />
        </div>
      </div>
    </section>
  )
}

export default Profile