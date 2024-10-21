import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Trabajo = styled.div`
  height: 40%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Titulo = styled.h2`
  height: 20px;
  color: #65647c;
  font-size: 25px;
  text-align: center;
  @media screen and (max-width: 770px) {
    font-size: 20px;
  }
`;
const SubTitulo = styled.h3`
  height: 20px;
  font-size: 18px;
  @media screen and (max-width: 770px) {
    font-size: 15px;
  }
`;

const Steps = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 85%;
`;

const StepiStep = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 180px;
  width: 180px;
  border-radius: 100%;
  border: 2px dashed crimson;
  @media screen and (max-width: 770px) {
    height: 100px;
    border: 1px dashed crimson;
    justify-content: center;
  }
`;

const Pago = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media screen and (max-width: 770px) {
    width: 100%;
  }
`;

const Preguntas = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Image = styled.img`
  height: 30px;
  transform: rotate(25deg);
  @media screen and (max-width: 770px) {
    height: 15px;
  }
`;

const Desc = styled.p`
  text-align: center;
  font-family: "monospace";
  font-weight: bold;
  @media screen and (max-width: 770px) {
    font-size: 13px;
  }
`;

const Contain = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 3px dashed black;
  border-bottom: 3px dashed black;
  @media screen and (max-width: 770px) {
    border-top: none;
  }
`;

const Video = styled.video`
  height: 220px;
  @media screen and (max-width: 770px) {
    height: 100px;
  }
  @media screen and (max-width: 1445px) {
    height: 130px;
  }
`;

const Ul = styled.ul``;

const Li = styled.li`
  color: #65647c;
  @media screen and (max-width: 770px) {
    font-size: 13px;
  }
`;

const SobreNos = () => {
  return (
    <Container id="Nosotros">
      <Trabajo>
        <Contain>
          <Titulo>Cómo Trabajamos</Titulo>
          <SubTitulo>Pasos:</SubTitulo>
        </Contain>
        <Steps>
          <StepiStep>
            <Image src="/assets/1.png" alt="" />
            <Desc>Nos Contactas</Desc>
          </StepiStep>
          <StepiStep>
            <Image src="/assets/dos.png" alt="" />
            <Desc>
              Enviamos un <br /> Presupuesto
            </Desc>
          </StepiStep>
          <StepiStep>
            <Image src="/assets/3.png" alt="" />
            <Desc>
              Coordinamos dia <br /> y hora
            </Desc>
          </StepiStep>
          <StepiStep>
            <Image src="/assets/cuatro.png" alt="" />
            <Desc>
              PUM!!! <br />
              Llegamos a tu <br />
              casa a Trabajar
            </Desc>
          </StepiStep>
        </Steps>
      </Trabajo>
      <Pago>
        <SubTitulo>
          Formas de <br /> Pago
        </SubTitulo>
        <Video src="/assets/pago.mp4" autoPlay loop muted />
        <Ul>
          <Li>Mercado Pago</Li>
          <Li>Efectivo</Li>
          <Li>Transferencia Bancaria</Li>
        </Ul>
      </Pago>
      <Preguntas>
        <Ul>
          <Li>El servicio dura entre 60 y 90 minutos</Li>
          <Li>Higieniza y Desinfecta</Li>
          <Li>Los Productos no son Tóxicos</Li>
          <Li>
            Las manchas salen? <span style={{ color: "crimson" }}>SI!!</span>
          </Li>
        </Ul>
        <Video src="/assets/consulta.mp4" autoPlay loop muted />
      </Preguntas>
    </Container>
  );
};

export default SobreNos;
