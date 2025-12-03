import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

const Container = styled.div`
  height: calc(100vh - 200px);
  widht: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 770px) {
    height: 100%;
    background-color: black;
  }
`;

const ContainerTwo = styled.div`
  margin-top: 15vh;
  height: 100%;
  display: flex;
  justify-content:space-around;
  @media screen and (max-width: 770px) {
    margin-top: 0px;
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    width:100%;
  }
`;

const Carrusel = () => {
  return (
    <Container id="Demo">
      <ContainerTwo>
        
          <video
            className="w-60"
            autoPlay
            loop
            muted
          >
            <source
              src="/assets/TapizadosWalWhatsapp.mp4"
              type="video/mp4"
              allowFullScreen
            />
          </video>
        
      </ContainerTwo>
    </Container>
  );
};

export default Carrusel;
