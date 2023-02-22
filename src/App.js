import styled from "styled-components";
import Intro from "./components/Intro";
import NavBar from "./components/NavBar";
import Whatsapp from "./components/Whatsapp";

const Container = styled.div`
height: 100vh;
`;

function App() {
  return (
   <Container>
    <NavBar />
    <Whatsapp/>
    <Intro/>
   </Container> 
  );
}

export default App;
