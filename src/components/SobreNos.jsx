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
  height: 30px;
`;
const SubTitulo = styled.h3`
  height: 30px;
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
  `;
  
  const Pago = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  `;
  
  const Preguntas = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  height: 30px;
  transform: rotate(25deg);
`;

const Desc = styled.p`
  text-align: center;
  font-family: "monospace";
  font-weight: bold;
`;

const Contain = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-top: 3px dashed black; 
border-bottom: 3px dashed black;
`;

const Video = styled.video`
height: 220px;
`;

const SobreNos = () => {
  return (
    <Container>
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
        <Video 
            src = "/assets/pago.mp4"
            autoPlay
            loop
            muted/>
      </Pago>
      <Preguntas>
      <Video 
            src = "/assets/consulta.mp4"
            autoPlay
            loop
            muted/>
      </Preguntas>
    </Container>
  );
};

export default SobreNos;
