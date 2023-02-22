import React from 'react'
import styled from 'styled-components'

const WhatsApp = styled.div`
display: flex;
padding: 10px;
position: fixed;
margin-left: 93vw;
margin-top: calc(85vh - 50px);
z-index: 999;
`;

const Image = styled.img`
height: 70px;
filter: drop-shadow(3px 4px 3px gray); 
`;

const Whatsapp = () => {
  return (
    <WhatsApp><a href="https://wa.me/+5493425972698" target="_blank" rel="noopener noreferrer"><Image src="/assets/whatsapp.png"/></a></WhatsApp>
  )
}

export default Whatsapp