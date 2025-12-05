import React from 'react'
import "./Intro.scss";

const Intro = () => {
  return (
    <div id='home' className='Container'>
      <div className='TextContainer'>
        <h1 className='Title'>Limpieza y Desinfección de Tapizados</h1>
        <p className='Desc'>Sillones, Sofás, Automoviles, Cortinados, Colchones, Alfombras, Limpieza en Seco.
          <br />Santa Fé, Argentina</p>
      </div>
      {/*
          <Info >
            <a href="#contacto"><Button className='boton'>Consultas {"=>"}</Button></a>
            <Contact>
                <Phone className='phone'>Santa Fé<br/>
                <A href="tel:+5493425972698">+549-342-5972698</A>
                </Phone>
            </Contact>
          </Info>
        <Right>
            <Image src='assets/perrito-sillon.jpg' alt="Perro descansando en su sillon favorito" />
        </Right>*/}
    </div>
  )
}

export default Intro