import React from 'react'
import styled from 'styled-components'

const WhatsApp = styled.div`
display: flex;
padding: 10px;
position: fixed;
margin-left: 93vw;
margin-top: calc(80vh - 50px);
z-index: 999;
`;

const Image = styled.img`
height: 70px;
filter: drop-shadow(3px 4px 3px gray); 
`;

const Whatsapp = () => {
  return (
    <WhatsApp><a href="https://wa.me/+5491163632288/?text=I'm%20interested%20in%20your%20car%20for%20sale" target="_blank" rel="noopener noreferrer"><Image src="/assets/whatsapp.png"/></a></WhatsApp>
  )
}

export default Whatsapp