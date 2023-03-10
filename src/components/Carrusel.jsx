import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import data from "../data";
import "./Carrusel.css";

const Container = styled.div`
  height: calc(100vh - 200px);
  widht: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 500px) {
    
  }
`;

const ContainerTwo = styled.div`
  margin-top: 5vh;
  height: 100%;
  display: flex;
  @media screen and (max-width: 500px) {
    margin-top: 1vh;
    display: flex;
    flex-direction: column;
    width:80%;
    justify-content: space-around;
    aligned-item: center;
  }
`;
const CarouselBootstrap = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-item: center;
  @media screen and (max-width: 500px) {
   margin-top:5px;
   margin-left: 25px;
    width:100% 
  }
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
  border: 2px dashed black;
  box-shadow: 0px 0px 2px 8px #eeeeee;
  @media screen and (max-width: 500px) {
    width:100%;
    height: 50%;
    display: flex;
    margin-left: 40px;
  }
`;
const Left = styled.div`
  width: 60%;
  @media screen and (max-width: 500px) {
    height: 50%;
    width:100% 
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
  font-size: 25px;
  width: 60%;
  margin-top: 20px;
  @media screen and (max-width: 500px) {
    font-size: 20px;
    width: 100%;
    margin-top: 5px;
   }
`;

const Carrusel = () => {
  return (
    <Container id="galeria">
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
            <Carousel fade style={{ height: "100%", width: "80%" }} className='carrusel'>
              {data.map((e) => (
                <Carousel.Item
                className="items"
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
                  <Carousel.Caption style={{backgroundColor: "gray", borderRadius: "10px", opacity: 0.9}} className="caption">
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
