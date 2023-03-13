import React from 'react';
import styled from 'styled-components';

const FooTer = styled.footer`
width: 100%;
border-top: black dashed 2px;
padding: 8px;
height: 80px;
display: flex;
justify-content: space-between;
justify-content: space-between;
align-item: center;
font-family: monospace;
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
color: gray;
`;

const A = styled.a`
text-decoration: none;
color: crimson;
font-family: monospace;
@media screen and (max-width: 768px) {
  color: white;
}
`;

const Phone = styled.span`
font-family: monospace;
font-size: 17px;
color: crimson;
`;

const Contact = styled.div`
display: flex;
margin-left: 45px;
flex-direction: column;
text-align: center;
`;

const Right = styled.div`
with: 40%;
`;

const Pe = styled.p`

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
                <A href="tel:+5493625161038">+549-362-5161038</A> <br/>
                <A href="tel:+5493425972698">+549-342-5972698</A>
                </Phone>
            </Contact>
    </Container>
    <Right>
            <Pe>
            © 2023 - Walter - Limpieza Tapizados<br />
                Todos los Derechos Reservados
            </Pe>
    </Right>
    </FooTer>
  )
}

export default Footer