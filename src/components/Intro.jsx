import React from 'react'
import styled from 'styled-components'
import './Intro.css'


const Container = styled.div`
height: calc(100vh - 50px);
display: flex;
padding: 20px
`;
const Left = styled.div`
width: 60%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
@media screen and (max-width: 500px) {
  height: 60%;
}
`;

const Right = styled.div`
width: 40%;
@media screen and (max-width: 500px) {
  margin-top: 5px;
  display: flex;
  align-items: center;
justify-content: center;
  width: 100%;
  height: 40%;
}
`;

const Title = styled.h1`
font-size: 60px;
width: 60%;
`;

const Desc = styled.p`
font-size: 20px;
width: 60%;
margin-top:20px;
`;

const Info = styled.div`
width: 60%;
display: flex;
justify-content:space-between;
align-item: center;
margin-top: 50px;
@media screen and (max-width: 500px) {
  margin-top: 10px;
}
`;

const Button = styled.button`
padding: 15px;
background-color: grey;
border: none;
color: white;
font-weight: bold;
font-family: monospace;
font-style: italic;
font-size: 20px;
border-radius: 15px;
border: white 2px dashed;
box-shadow: 0px 0px 2px 2px gray;
`;

const Contact = styled.div`
display: flex;
flex-direction: column;
`;
const Phone = styled.span`
font-family: monospace;
font-size: 17px;
color: gray;
`;

const Image = styled.img`
height: 100%;

@media screen and (max-width: 500px) {
  border-radius: 100%;
  height: 200px;
  width: 200px;
}
`;

const Intro = () => {
  return (
    <Container className='container'>
        <Left className='left'>
          <Title className='title'>Limpieza y Desinfección de Tapizados</Title>
          <Desc className='Desc'>Sillones, Sofás, Automoviles, Cortinados, Colchones, Alfombras, Limpieza en Seco.</Desc> 
          <Info className='info'>
            <a href="#contacto"><Button className='boton'>Consultas =></Button></a>
            <Contact>
                <Phone className='phone'>Resistencia / Corrientes<br/><a href="tel:+5493625161038" style={{textDecoration:" none", color: 'gray', fontFamily: 'monospace'}}>+549-362-5161038</a><br/><a href="tel:+5493425972698" style={{textDecoration:" none", color: 'gray', fontFamily: 'monospace'}}>+549-342-5972698</a></Phone>
            </Contact>
          </Info>
        </Left>
        <Right>
            <Image src='assets/sillon-gato.jpg' alt="Gato descansando en su sillon favorito" />
        </Right>
    </Container>
  )
}

export default Intro