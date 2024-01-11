import React from 'react'
import Checkmark from '../Assets/checkmark.png'
import Arrow from '../Assets/arrow.png'
import ArrowUp from '../Assets/arrow-up.png'
import { Link } from 'react-scroll'

function Experiences() {
  return (
    <section id="experience">
      <Link to='projects' spy={true} smooth={true} offset={0} duration={300}>
        <img src={ArrowUp} alt="Ícone seta" className="icon arrow-up" />
      </Link>
      <p className="section__text__p1">Saiba com o que</p>
      <h1 className="title">Trabalhei</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container">
            <h2 className="experience-sub-title">Front-end Dev</h2>
            <div className="article-container">
              <article>
                <img src={Checkmark} alt="Ícone experiência" className="icon" />
                <div>
                  <h3>HTML</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img src={Checkmark} alt="Ícone experiência" className="icon" />
                <div>
                  <h3>CSS</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img src={Checkmark} alt="Ícone experiência" className="icon" />
                <div>
                  <h3>SASS</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img src={Checkmark} alt="Ícone experiência" className="icon" />
                <div>
                  <h3>JavaScript</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <img src={Checkmark} alt="Ícone experiência" className="icon" />
                <div>
                  <h3>TypeScript</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <img src={Checkmark} alt="Ícone experiência" className="icon" />
                <div>
                  <h3>Material UI</h3>
                  <p>Intermediate</p>
                </div>
              </article>
            </div>
          </div>
          <div className="details-container">
            <h2 className="experience-sub-title">Frontend Development</h2>
            <div className="article-container">
              <article>
                <img src={Checkmark} alt="Ícone experiência" className="icon" />
                <div>
                  <h3>PostgreSQL</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <img src={Checkmark} alt="Ícone experiência" className="icon" />
                <div>
                  <h3>Node JS</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img src={Checkmark} alt="Ícone experiência" className="icon" />
                <div>
                  <h3>Express JS</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img src={Checkmark} alt="Ícone experiência" className="icon" />
                <div>
                  <h3>Git</h3>
                  <p>Intermediate</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      <Link to='contact' spy={true} smooth={true} offset={0} duration={300}>
        <img src={Arrow} alt="Ícone seta" className="icon arrow" />
      </Link>
    </section>
  )
}

export default Experiences