import styled from "styled-components";
import AnimatedShapes from "./components/AnimatedShapes";
import Intro from "./components/Intro";
import NavBar from "./components/NavBar";
import Whatsapp from "./components/Whatsapp";

const Container = styled.div`
height: 100vh;
overflow: hidden;
`;

function App() {
  return (
   <Container>
    <AnimatedShapes />
    <NavBar />
    <Whatsapp/>
    <Intro/>
   </Container> 
  );
}

export default App;
