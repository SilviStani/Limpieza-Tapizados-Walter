import styled from "styled-components";
import Carrusel from "./components/Carrusel";
import Contacto from "./components/Contacto";
import Demo from "./components/Demo";
import AnimatedShapes from "./components/AnimatedShapes";
import Intro from "./components/Intro";
import NavBar from "./components/NavBar";

const Container = styled.div`
height: 100vh;
overflow: hidden;
`;

function App() {
  return (
    <>
   <Container>
    <NavBar />
    <Intro/>
   </Container>
   <Container>
    <Carrusel/>
   </Container>
   <Container>
    <Demo/>
   </Container>
   <Container>
     <Contacto/>
    <AnimatedShapes/>
   </Container>
   </> 
  );
}

export default App;
