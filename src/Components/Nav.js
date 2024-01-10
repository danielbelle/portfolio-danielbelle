import React from 'react'

function Nav() {

  const toggleMenu = () => {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }


  return (
    <div id='nav'>
      <nav id="desktop-nav">
        <div className="logo">Daniel Henrique Bellé</div>
        <div>
          <ul className="nav-links">
            <li><a href="#about">Saiba +</a></li>
            <li><a href="#experience">Jobs</a></li>
            <li><a href="#projects">Projetos</a></li>
            <li><a href="#contact">Bora Conversar?</a></li>
          </ul>
        </div>
      </nav>
      <nav id="hamburger-nav">
        <div className="logo">Daniel Henrique Bellé</div>
        <div className="hamburger-menu">
          <div className="hamburger-icon" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="menu-links">
            <li><a href="#about" onClick={toggleMenu}>Saiba +</a></li>
            <li><a href="#experience" onClick={toggleMenu}>Jobs</a></li>
            <li><a href="#projects" onClick={toggleMenu}>Projetos</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Bora Conversar?</a></li>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav