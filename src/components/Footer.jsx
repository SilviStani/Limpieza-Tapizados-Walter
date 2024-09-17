import React from "react";
import styled from "styled-components";

const FooTer = styled.footer`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-item: center;
  font-family: monospace;
  background-color: gray;
  color: white;
  @media screen and (max-width: 770px) {
    padding: 5px;
    border-top: 2px solid black;
    background-color: white;
  }
  @media screen and (max-width: 1440px) {
    width: 100%;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 60%;
  text-align: center;
`;

const Huno = styled.h1`
  font-family: "Playfair Display";
  font-size: 30px;
  color: white;
  @media screen and (max-width: 770px) {
    display: none;
  }
  @media screen and (max-width: 1440px) {
    font-size: 25px;
  }
`;

const A = styled.a`
  text-decoration: none;
  color: white;
  font-family: monospace;
  @media screen and (max-width: 770px) {
    color: gray;
  }
  @media screen and (max-width: 1440px) {
    font-size: 15px;
  }
`;

const Phone = styled.span`
  font-family: monospace;
  font-size: 17px;
  color: white;
  @media screen and (max-width: 770px) {
    color: gray;
    font-size: 12px;
  }
`;

const Contact = styled.div`
  display: flex;
  margin-left: 45px;
  flex-direction: column;
  text-align: center;
  @media screen and (max-width: 770px) {
    display: flex;
    margin-left: 5px;
    flex-direction: column;
    text-align: center;
  }
`;

const Right = styled.div`
  with: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 770px) {
    display: flex;
    flex-direction: column;
  }
`;

const Pe = styled.p`
  @media screen and (max-width: 770px) {
    display: none;
  }
`;

const Instagram = styled.a`
  display: none;
  @media screen and (max-width: 770px) {
    display: flex;
    justify-content: center;
    width: 100px;
  }
`;

const Contactame = styled.a`
  width: 60px;
  border-radius: 100%;
  margin-top: 0.2%;
`;

const Imagen = styled.img`
  border-radius: 100%;
  height: 80px;
`;

const Footer = () => {
  const ano = new Date();
  let fecha = ano.getFullYear();
  return (
    <FooTer>
      <Container>
        <Huno>
          Limpieza y desinfeción <br /> de Tapizados
        </Huno>
        <Contact>
          <Phone className="phone">
            Resistencia
            <br />
            <img
              src="/assets/phone-call.png"
              alt="llamame en el siguiente enlace"
              height={"20px"}
            />
            <A href="tel:+5493425972698"> +549-342-5972698</A>
          </Phone>
        </Contact>
      </Container>
      <Contactame
        href="https://wa.me/5491163632288/?text=Me%20interesa%20información%20sobre%20páginas%20Web"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Imagen
          src="/assets/laptopwave.png"
          alt="Silvina dev: Contactame aqui"
        />
      </Contactame>
      <Right>
        <Pe>
          © {fecha} - Walter - Limpieza Tapizados
          <br />
          Todos los Derechos Reservados
        </Pe>
        <Instagram
          href="https://www.instagram.com/waltertapizados/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/assets/instagram.png"
            alt="instagram link"
            height={"40px"}
          />
        </Instagram>
      </Right>
    </FooTer>
  );
};

export default Footer;
