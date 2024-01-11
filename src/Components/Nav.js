import React, { useState } from 'react'
import { Link } from 'react-scroll'

function Nav() {

  const [openMenu, setOpenMenu] = useState(false);

  const menuOptions = [
    {
      text: "Início",
      to: "home",
      icon: ''
    },
    {
      text: "Sobre",
      to: "about",
      icon: ''
    },
    {
      text: "Como Funciona",
      to: "work",
      icon: ''
    },
    {
      text: "Depoimentos",
      to: "testimonials",
      icon: ''
    },
    {
      text: "Contato",
      to: "contact",
      icon: ''
    },
    {
      text: "Carrinho de Compras",
      to: "contact",
      icon: ''
    }
  ]

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
            <li><Link to='about' spy={true} smooth={true} offset={0} duration={300}>Saiba +</Link></li>
            <li><Link to='projects' spy={true} smooth={true} offset={0} duration={300}>Projetos</Link></li>
            <li><Link to='experience' spy={true} smooth={true} offset={0} duration={300}>Jobs</Link></li>
            <li><Link to='contact' spy={true} smooth={true} offset={0} duration={300}>Bora Conversar?</Link></li>
          </ul>
        </div>
      </nav>
      {/*
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
      */}
    </div>
  )
}

export default Nav