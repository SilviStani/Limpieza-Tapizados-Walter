import React, { useState } from 'react';
import './Contacto.css';


const Contacto = () => {
  const [message, setMessage] = useState('');
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  
  return (
    <div className='Container' id='contacto'>
      <div className='TituloContainer'>
        <h1 className='Titulo'>¿Consultas? Contáctame</h1>
      </div>
      <div className='form'>
        <form className="formulario">
          <h5>Nombre:</h5>
        <input
        className='inputs'
        id="name"
        placeholder="Nombre:"
        value={name}
        onChange={e => setName(e.target.value)} />
        <h5>Número Alternativo:</h5>
        <input
          className='inputs'
          id="number"
          placeholder="Número alternativo:"
          value={number}
          onChange={e => setNumber(e.target.value)}
          />
          <h5>Consulta:</h5>  
        <textarea className='inputs area' id="message" name="w3review" rows="4" cols="50" value={message} placeholder={"Escribe tu consulta aqui:"} onChange={e => setMessage(e.target.value)} />
        </form>
        </div>
      <a href={`https://wa.me/5491163632288/?text=Nombre: ${name} + ${"\n"} + %20 + Número teléfono ${number} + ${"\n"}  + %20 + Mensaje ${message}`}
      target="_blank" rel="noopener noreferrer" className='a'><h4>Enviar</h4></a>
    </div>
  )
}

export default Contacto;