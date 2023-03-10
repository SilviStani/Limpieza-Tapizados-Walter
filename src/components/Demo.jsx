import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import data from "../data";

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
`;
const Left = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
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
`;

const Desc = styled.p`
  font-size: 20px;
  width: 60%;
  margin-top: 20px;
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
