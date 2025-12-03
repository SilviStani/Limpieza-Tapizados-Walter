import styled from "styled-components";
import Carrusel from "./components/Carrusel";
import Contacto from "./components/Contacto";
import Demo from "./components/Demo";
import Intro from "./components/Intro";
import NavBar from "./components/NavBar";
import FooTer from "./components/Footer";
import SobreNos from "./components/SobreNos";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
`;

function App() {
  return (
    <>
      <Container>
        <NavBar />
        <Intro />
      </Container>
      <Container>
        <Carrusel />
      </Container>
      <Container>
        <Demo />
      </Container>
      <Container style={{ height: "100%" }}>
        <SobreNos/>
      </Container>
      <Container style={{ height: "12vh", backgroundColor: "gray", marginTop: "10vh" }}>
        <FooTer />
      </Container>
    </>
  );
}

export default App;
