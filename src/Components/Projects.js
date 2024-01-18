import React from 'react'
import Proj1 from '../Assets/project-1.png'
import Proj2 from '../Assets/project-2.png'
import Proj3 from '../Assets/project-3.png'
import Arrow from '../Assets/arrow.png'
import ArrowUp from '../Assets/arrow-up.png'
import { Link } from 'react-scroll'
import './Styles/Projects.css'

function Projects() {
  return (
    <div id="projects" className='projects-section'>
      <div>
        <Link to='about' spy={true} smooth={true} offset={0} duration={300}>
          <img src={ArrowUp} alt="Ícone seta" className="icon arrow-up" />
        </Link>
        <div className='content-box'>
          <p className="project-text-p1">Mais Recentes</p>
          <h1 className="project-up-title">Projetos</h1>
          <div className="experience-details-container-project">
            <div className="project-containers">
              <div className="details-container-project color-container box-1">
                <div className="article-container">
                  <img src={Proj1} alt="Projeto 1" className="project-img" />
                </div>
                <h2 className="experience-sub-title project-title">Landing Page ReactJS</h2>
                <div className="btn-container">
                  <a href="https://github.com/danielbelle/react-js-landing-page-restaurant" target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-color-2 project-btn">
                      Github
                    </button>
                  </a>
                  <a href="https://react-js-landing-page-restaurant.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-color-2 project-btn">
                      Live Demo
                    </button>
                  </a>
                </div>
              </div>

              <div className="details-container-project color-container box-2">
                <div className="article-container">
                  <img src={Proj2} alt="Projeto 2" className="project-img" />
                </div>
                <h2 className="experience-sub-title project-title">Consumo de API Externa</h2>
                <div className="btn-container">
                  <a href="https://github.com/danielbelle/buscador-cep" target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-color-2 project-btn">
                      Github
                    </button>
                  </a>
                  <a href="https://buscador-cep-pink-pi.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-color-2 project-btn">
                      Live Demo
                    </button>
                  </a>
                </div>
              </div>
              <div className="details-container-project color-container box-3">
                <div className="article-container">
                  <img src={Proj3} alt="Projeto 3" className="project-img" />
                </div>
                <h2 className="experience-sub-title project-title">CRUD PHP Pedidos</h2>
                <div className="btn-container">
                  <a href="https://github.com/danielbelle/api-orders" target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-color-2 project-btn">
                      Github
                    </button>
                  </a>
                  <a href="https://www.youtube.com/watch?v=G1Brhqz-PqM" target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-color-2 project-btn">
                      Live Demo
                    </button>
                  </a>
                </div>
              </div>

              <div className="details-container-project color-container box-4">
                <div className="article-container">
                  <img src={Proj3} alt="Projeto 3" className="project-img" />
                </div>
                <h2 className="experience-sub-title project-title">CRUD PHP Pedidos</h2>
                <div className="btn-container">
                  <a href="https://github.com/danielbelle/api-orders" target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-color-2 project-btn">
                      Github
                    </button>
                  </a>
                  <a href="https://www.youtube.com/watch?v=G1Brhqz-PqM" target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-color-2 project-btn">
                      Live Demo
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link to='contact' spy={true} smooth={true} offset={0} duration={300}>
          <img src={Arrow} alt="Ícone seta" className="icon arrow" />
        </Link>
      </div>
    </div>
  )
}

export default Projects