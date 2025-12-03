import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import data from "../data";
import "./Carrusel.css";

const Container = styled.div`
  height: calc(100vh - 200px);
  margin-top: 10vh;
  widht: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 20vh;
  @media screen and (max-width: 770px) {
    height: 100%;
    background-color: black; 
  }
`;

const ContainerTwo = styled.div`

  height: 100%;
  display: flex;
  @media screen and (max-width: 770px) {
    display: none;
  }
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
  border-radius: 10%;
  padding: 10px;
  margin-left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-shadow: 0px 0px 2px 8px #eeeeee;
`;
const Left = styled.div`
  width: 85%;
`;

const Desc = styled.p`
  font-size: 25px;
  width: 60%;
  margin-top: 20px;
`;

const PhoneCarousel = styled.div` 
display: none;
@media screen and (max-width: 770px) {
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 height: 100%;  
 width: 100%;
}
`;

const Carrusel = () => {
  return (
    <Container id="galeria">
      <ContainerTwo>
        <Right>
          <Desc style={{ fontWeight: "bold" }}>
            Sistema de Inyección – Extracción.
            <br />
            <br />
            <span className="span">
              Utilizamos las Mejores Máquinas y Productos de Limpieza.
            </span>
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
                </Carousel.Item>
              ))}
            </Carousel>
          </CarouselBootstrap>
        </Left>
      </ContainerTwo>
      <PhoneCarousel>
        <Carousel style={{ height: "100%", width: "80%" }}>
          {data.map((e) => (
            <Carousel.Item >
              <img
                className="d-block w-100"
                alt={e.alt}
                src={e.imgSource}
                style={{ height: "500px" }}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </PhoneCarousel>
    </Container>
  );
};

export default Carrusel;
