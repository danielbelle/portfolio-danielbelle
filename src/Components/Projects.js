import React from 'react'
import Proj1 from '../Assets/project-1.png'
import Proj2 from '../Assets/project-2.png'
import Proj3 from '../Assets/project-3.png'
import Arrow from '../Assets/arrow.png'

function Projects() {
  return (
    <section id="projects">
      <p className="section__text__p1">Mais Recentes</p>
      <h1 className="title">Projetos</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container color-container">
            <div className="article-container">
              <img src={Proj1} alt="Projeto 1" className="project-img" />
            </div>
            <h2 className="experience-sub-title project-title">Project One</h2>
            <div className="btn-container">
              <button className="btn btn-color-2 project-btn" onclick="location.href='https://github.com/'">
                Github
              </button>
              <button className="btn btn-color-2 project-btn" onclick="location.href='https://github.com/'">
                Live Demo
              </button>
            </div>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <img src={Proj2} alt="Projeto 2" className="project-img" />
            </div>
            <h2 className="experience-sub-title project-title">Project Two</h2>
            <div className="btn-container">
              <button className="btn btn-color-2 project-btn" onclick="location.href='https://github.com/'">
                Github
              </button>
              <button className="btn btn-color-2 project-btn" onclick="location.href='https://github.com/'">
                Live Demo
              </button>
            </div>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <img src={Proj3} alt="Projeto 3" className="project-img" />
            </div>
            <h2 className="experience-sub-title project-title">Project Three</h2>
            <div className="btn-container">
              <button className="btn btn-color-2 project-btn" onclick="location.href='https://github.com/'">
                Github
              </button>
              <button className="btn btn-color-2 project-btn" onclick="location.href='https://github.com/'">
                Live Demo
              </button>
            </div>
          </div>
        </div>
      </div>
      <img src={Arrow} alt="Ícone seta" className="icon arrow" onclick="location.href='./#contact'" />
    </section>
  )
}

export default Projects