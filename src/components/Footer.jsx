import React from 'react';
import styled from 'styled-components';

const FooTer = styled.footer`
width: 100%;
height: 80px;
display: flex;
justify-content: space-between;
justify-content: space-between;
align-item: center;
font-family: monospace;
background-color: gray;
color: white;
margin-bottom: 0;
`;

const Container = styled.div`
display: flex; 
justify-content: space-around;
width: 60%;
text-align: center;
`;

const Huno = styled.h1`
font-family: 'Playfair Display';
font-size: 30px;
color: white;
@media screen and (max-width: 768px) {
  display: none;
}
`;

const A = styled.a`
text-decoration: none;
color: white;
font-family: monospace;
@media screen and (max-width: 768px) {
  color: white;
}
`;

const Phone = styled.span`
font-family: monospace;
font-size: 17px;
color: white;
@media screen and (max-width: 768px) {
  
}
`;

const Contact = styled.div`
display: flex;
margin-left: 45px;
flex-direction: column;
text-align: center;
@media screen and (max-width: 768px) {
display: flex;
margin-left: 5px;
flex-direction: column;
text-align: center;
}
`;

const Right = styled.div`
with: 40%;
@media screen and (max-width: 768px) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  
}
`;

const Pe = styled.p`
@media screen and (max-width: 768px) {
  display: none;
}
`;

const Instagram = styled.a`
display: none;
@media screen and (max-width: 768px) {
  display: flex;
  justify-content: center;
  width: 100px;
}
`;


const Footer = () => {
  return (
    <FooTer>
    <Container>
        <Huno>
            Limpieza y desinfeción <br/> de Tapizados
        </Huno>
          <Contact>
                <Phone className='phone'>Resistencia / Corrientes<br/>
                <img src="/assets/phone-call.png" alt="llamame en el siguiente enlace" height={"20px"} /><A href="tel:+5493625161038"> +549-362-5161038</A> <br/>
                <img src="/assets/phone-call.png" alt="llamame en el siguiente enlace" height={"20px"} /><A href="tel:+5493425972698"> +549-342-5972698</A>
                </Phone>
            </Contact>
    </Container>
    <Right>
            <Pe>
            © 2023 - Walter - Limpieza Tapizados<br />
                Todos los Derechos Reservados
            </Pe>
            Siguenos!
            <Instagram href="https://www.instagram.com/waltertapizados/" target="_blank" rel="noopener noreferrer"><img src='/assets/instagram.png' alt='instagram link' height={"40px"}/></Instagram>
    </Right>
    </FooTer>
  )
}

export default Footer