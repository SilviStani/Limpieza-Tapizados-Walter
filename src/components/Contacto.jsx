import React, { useState } from 'react';
import styled from 'styled-components';
import './Contacto.css';


const Contacto = () => {
  const [message, setMessage] = useState('');
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  
  return (
    <div className='container' id='contacto'>
      <div className='TituloContainer'>
        <h1 className='Titulo'>¿Consultas? Contáctame</h1>
      </div>
      <div className='Container'>
      <div className='Left'>
        <video src="/assets/celular.mp4"
        width={"600px"}
            autoPlay
            loop
            muted
            style={{ marginLeft: "30%" }}/>
      </div>
        <div className='Right'>
      <div className='form'>
        <form className="formulario">
          <p>Nombre:</p>
        <input
        className='inputs'
        id="name"
        placeholder="Nombre:"
        value={name}
        onChange={e => setName(e.target.value)} />
        <p>Número Alternativo:</p>
        <input
          className='inputs'
          id="number"
          placeholder="Número alternativo:"
          value={number}
          onChange={e => setNumber(e.target.value)}
          />
          <p>Consulta:</p>  
        <textarea className='inputs area' id="message" name="w3review" rows="4" cols="50" value={message} placeholder={"Escribe tu consulta aqui:"} onChange={e => setMessage(e.target.value)} />
      <a href={`https://wa.me/5491163632288/?text=Nombre: ${name} + ${"\n"} + %20 + Teléfono alternativo: ${number} + ${"\n"}  + %20 + Mensaje: ${message}`}
      target="_blank" rel="noopener noreferrer" className='a'><img src="/assets/send-message.png" alt="" height={"20px"} className='img'/></a>
      </form>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Contacto;