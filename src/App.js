import styled from "styled-components";
import NavBar from "./components/NavBar";

const Container = styled.div`
height: 100vh;
background-image: url("https://images.pexels.com/photos/13519282/pexels-photo-13519282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
background-repeat: no-repeat;
background-size: cover;
`;

function App() {
  return (
   <Container>
    <NavBar />
   </Container> 
  );
}

export default App;
