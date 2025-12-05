import React from "react";
import styled from "styled-components";
import "./Footer.scss";

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
  height: 60px;
`;

const Footer = () => {
  const ano = new Date();
  let fecha = ano.getFullYear();
  return (
    <fooTer className="Footer">
        <div className="Contact">
          <p className="phone">
            Santa Fé
            <br />
            <a href="tel:+5493425972698" className="aText"> +549-342-5972698</a>
          </p>
        </div>
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
    </fooTer>
  );
};

export default Footer;
