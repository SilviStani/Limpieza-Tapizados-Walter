import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

const Container = styled.div`
  height: calc(100vh - 200px);
  widht: 100%;
  display: flex;
  flex-direction: column;
`;

const ContainerTwo = styled.div`
  margin-top: 5vh;
  height: 100%;
  display: flex;
  justify-content:space-around;
  @media screen and (max-width: 500px) {
    margin-top: 1vh;
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    width:100%;
  }
`;

const Right = styled.div`
  width: 40%;
  border-radius: 100%;
  background-color: gray;
  color: white;
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: dashed white 2px;
  box-shadow: 0px 0px 2px 8px gray;
  @media screen and (max-width: 500px) {
    margin-left: 15px;
    height: 400px;
    width: 90%;
    background-color: gray;
    border-radius: 20px;
    border: dashed white 2px;
    box-shadow: 0px 0px 2px 8px gray;
   }
   `;
   const Left = styled.div`
   width: 60%;
   display: flex;
   justify-content: center;
   @media screen and (max-width: 500px) {
     width:80%;
     height: 60%;
     display: flex;
     margin-left: 40px;
   }
  
`;

const Title = styled.h2`
  margin-top: 20px;
  padding: 10px;
  background-color: white;
  text-align: center;
  border-bottom: 2px dashed black;
  border-top: 2px dashed black;
  top: 0;
  margin-bottom: 20px;
  font-size: 40px;
  text-decoration: underline crimson;
  width: 100%;
  @media screen and (max-width: 500px) {
    margin-top:10px;
    font-size: 25px;
  }
`;

const Desc = styled.p`
  font-size: 20px;
  width: 60%;
  margin-top: 20px;
  @media screen and (max-width: 500px) {
   font-size: 18px;
   color: white;
   }
`;

const Carrusel = () => {
  return (
    <Container id="Demo">
      <Title>Demo</Title>
      <ContainerTwo>
        <Left>
          <video
            className="w-60"
            autoPlay
            loop
            muted
            style={{ margin: "30px" }}
          >
            <source
              src="/assets/TapizadosWalWhatsapp.mp4"
              type="video/mp4"
              allowFullScreen
            />
          </video>
        </Left>
        <Right>
          <Desc>
            La higienización se realiza a través del sistema de inyección –
            extracción. Consiste en inyectar agua con un detergente especial a
            presión aflojando la suciedad más profunda, y simultáneamente
            aspirando todo lo que se remueve.
          </Desc>
        </Right>
      </ContainerTwo>
    </Container>
  );
};

export default Carrusel;
