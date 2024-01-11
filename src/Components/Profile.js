import React from 'react'
import ProfilePic from '../Assets/profile-pic.png'
import LinkedIn from '../Assets/linkedin.png'
import GitHub from '../Assets/github.png'
import Resume from '../Assets/resume-example.pdf'
import { Link } from 'react-scroll'

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
          <a href={Resume} target="_blank" rel="noopener noreferrer">
            <button className="btn btn-color-2" >
              Download CV
            </button>
          </a>
          <Link to='contact' spy={true} smooth={true} offset={0} duration={300}>
            <button className="btn btn-color-1">
              Bora Conversar?
            </button>
          </Link>
        </div>
        <div id="socials-container">
          <a href="http://www.linkedin.com/in/danielhenriquebelle/" target="_blank" rel="noopener noreferrer">
            <img src={LinkedIn} alt="Meu perfil do LinkedIn" className="icon" />
          </a>
          <a href="https://github.com/danielbelle" target="_blank" rel="noopener noreferrer">
            <img src={GitHub} alt="Meu perfil do GitHub" className="icon" />
          </a>


        </div>
      </div>
    </section>
  )
}

export default Profile