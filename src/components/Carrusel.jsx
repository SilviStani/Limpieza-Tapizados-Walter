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
`;
const CarouselBootstrap = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-item: center;
`;

const Right = styled.div`
  width: 40%;
  border-radius: 20%;
  text-transform: capitalize;
  background-color: #eeeeee;
  padding: 10px;
  margin-left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const Left = styled.div`
  width: 60%;
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
  font-size: 25px;
  width: 60%;
  margin-top: 20px;
`;

const Carrusel = () => {
  return (
    <Container>
      <Title>Galeria de Fotos</Title>
      <ContainerTwo>
        <Right>
          <Desc style={{fontWeight: "bold"}}>
            Sistema de Inyección – Extracción.
           <br />
           <br /> <span style={{color: "crimson",fontWeight: "bold", fontFamily: "monospace", fontStyle: "italic"}}>Utilizamos las Mejores Máquinas y Productos de Limpieza.</span> 
          </Desc>
        </Right>
        <Left>
          <CarouselBootstrap>
            <Carousel fade style={{ height: "100%", width: "80%" }}>
              {data.map((e) => (
                <Carousel.Item
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    backgroundColor: "black",
                  }}
                >
                  <img
                    style={{ height: "500px" }}
                    className="d-block"
                    src={e.imgSource}
                    alt={e.alt}
                  />
                  <Carousel.Caption style={{backgroundColor: "gray", borderRadius: "10px", opacity: 0.9}}>
                    <h3>{e.label}</h3>
                    <p>{e.p}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </CarouselBootstrap>
        </Left>
      </ContainerTwo>
    </Container>
  );
};

export default Carrusel;