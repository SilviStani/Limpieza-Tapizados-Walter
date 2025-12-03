import React from 'react'
import styled from 'styled-components'
import "./NavBar.scss";

const NavBar = () => {
  return (
    <section id='NavBar' className='navbarHeader_Container'>
      <section className='navbarHeader'>
        <a href="#home" className='navbarLogo'>
          <img
            src="/assets/Logo-byn.png"
            alt="Logo Walter Tapizados"
            className='navbar_Logo_Image'
          />
        </a>
        <article style={{ cursor: "pointer" }} className="menu">
          <a
            href="#galeria"
            className="menuItem"
          >
            Fotos
          </a>
          <a
            className="menuItem"
            href="#Demo"
          >
            Video
          </a>
          <a
            href="#Nosotros" className="menuItem" >
            Como Trabajamos
          </a>
          <a href="https://wa.me/5493425972698/?text=Estoy%20interesado%20en%20su%20servicio" 
          className="menuItem" 
          target="_blank" 
          rel="noopener noreferrer">
            Presupuesto
          </a>
          <a
            className="menuItem"
            href="mailto:rulitoymorita@gmail.com"
            target="_blank"
            rel="noopener noreferrer">
            <img
              src="/assets/correo.png"
              alt="Gmail Walter Tapizados"
              height={"40px"}
              className="logo"
            />
          </a>
          <a
            className="menuItem"
            href="https://www.instagram.com/waltertapizados/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/instagram.png"
              alt="Instagram Walter Tapizados"
              height={"40px"}
              className="logo"
            />
          </a>
          <a
            className="menuItem"
            href="https://wa.me/5493425972698/?text=Estoy%20interesado%20en%20su%20servicio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="logo"
              src="/assets/whatsapp.png"
              alt="Instagram Walter Tapizados"
              height={"40px"}
              style={{ marginLeft: "10px" }}
            />
          </a>
        </article>
      </section>
    </section>
  )
}

export default NavBar;
/*
</article>
</section>
</section>
)
}

export default NavBar;
*/