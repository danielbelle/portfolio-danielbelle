import React from 'react'
import PicAbout from '../Assets/about-pic.png'
import Experience from '../Assets/experience.png'
import Education from '../Assets/education.png'
import Arrow from '../Assets/arrow.png'

function About() {
  return (
    <section id="about">
      <p className="section__text__p1">Conheça Mais</p>
      <h1 className="title">Sobre mim</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <img src={PicAbout} alt="Foto de perfil" className="about-pic" />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img src={Experience} alt="Ícone de experiência" className="icon" />
              <h3>Jobs</h3>
              <p>1+ anos <br />Desenvolvimento Full Stack PHP</p>
            </div>
            <div className="details-container">
              <img src={Education} alt="Ícone de educação" className="icon" />
              <h3>Graduação</h3>
              <p>B.Sc. Bachelors Degree<br />M.Sc. Masters Degree</p>
            </div>
          </div>
          <div className="text-container">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis
              reprehenderit et laborum, rem, dolore eum quod voluptate
              exercitationem nobis, nihil esse debitis maxime facere minus sint
              delectus velit in eos quo officiis explicabo deleniti dignissimos.
              Eligendi illum libero dolorum cum laboriosam corrupti quidem,
              reiciendis ea magnam? Nulla, impedit fuga!
            </p>
          </div>
        </div>
      </div>
      <img src={Arrow} alt="Ícone seta" className="icon arrow" onclick="location.href='./#experience'" />
    </section>
  )
}

export default About