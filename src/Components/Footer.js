import React, { useState, useEffect } from 'react'

function Footer() {

  const [date, setDate] = useState();

  const getYear = () => setDate(new Date().getFullYear())


  useEffect(() => {
    getYear();
  }, [])

  return (

    <footer>
      <nav>
        <div className="nav-links-container">
          <ul className="nav-links">
            <li><a href="#about">Saiba +</a></li>
            <li><a href="#experience">Jobs</a></li>
            <li><a href="#projects">Projetos</a></li>
            <li><a href="#contact">Bora Conversar?</a></li>
          </ul>
        </div>
      </nav>
      <p>Copyright &#169; {date} Daniel Henrique Bellé. All Rights Reserved.</p>
    </footer>
  )
}

export default Footer