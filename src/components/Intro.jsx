import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
height: calc(100% + 20vh);
display: flex;
padding: 20px;
@media screen and (max-width: 770px) {
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  background-image: url("/assets/perrito-sillon.jpg");
  background-size: cover;
  background-repeat: none;
}
}
`;
const Left = styled.div`
width: 60%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
@media screen and (max-width: 770px) {
  height: 100%;
  width: 100%;
  justify-content:start;
}
`;

const Right = styled.div`
width: 40%;
@media screen and (max-width: 770px) {
  display: none;
}
`;

const Title = styled.h1`
font-size: 60px;
width: 60%;
@media screen and (max-width: 770px) {
  font-size: 30px;
  font-weight: bold;
  color: white;
}
`;

const Desc = styled.p`
font-size: 20px;
width: 60%;
margin-top:20px;
@media screen and (max-width: 770px) {
  padding: 5px;
  font-size: 18px;
  color: white;
  border-radius: 10px;
  background-color: rgb(166, 166, 166, 0.7);
}
`;

const Info = styled.div`
width: 60%;
display: flex;
justify-content:space-between;
align-item: center;
margin-top: 50px;
@media screen and (max-width: 770px) {
  display: none;
}
@media screen and (max-width: 1445px) {
  width: 100%;
  justify-content: space-around;
}
`;

const Button = styled.button`
padding: 15px;
background-color: orange;
border: none;
color: white;
font-weight: bold;
font-family: monospace;
font-style: italic;
font-size: 20px;
border-radius: 15px;
border: white 2px dashed;
box-shadow: 0px 0px 2px 2px darkorange;
@media screen and (max-width: 770px) {
      
  }
`;

const Contact = styled.div`
display: flex;
flex-direction: column;
`;

const Phone = styled.span`
font-family: monospace;
font-size: 17px;
color: gray;
@media screen and (max-width: 770px) {
    font-size: 15px;
    margin-top: 150px;
    background-color: gray;
    color: white;
    padding: 5px;
    border-radius: 10px;
`;

const Image = styled.img`
height: 100%;
`;

const A = styled.a`
text-decoration: none;
color: gray;
font-family: monospace;
@media screen and (max-width: 770px) {
  color: white;
}
`;

const Intro = () => {
  return (
    <Container id='home'>
        <Left >
          <Title >Limpieza y Desinfección de Tapizados</Title>
          <Desc >Sillones, Sofás, Automoviles, Cortinados, Colchones, Alfombras, Limpieza en Seco.</Desc> 
          <Info >
            <a href="#contacto"><Button className='boton'>Consultas {"=>"}</Button></a>
            <Contact>
                <Phone className='phone'>Santa Fé<br/>
                <A href="tel:+5493425972698">+549-342-5972698</A>
                </Phone>
            </Contact>
          </Info>
        </Left>
        <Right>
            <Image src='assets/perrito-sillon.jpg' alt="Perro descansando en su sillon favorito" />
        </Right>
    </Container>
  )
}

export default Intro