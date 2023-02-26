import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
heigth: 50px;
width: 100%;
background-color: rgba(255, 255, 255, 0.8);
border-bottom: gray 2px dashed;
`;

const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
justify-content: space-between;
align-item: center;
`;

const Left = styled.div`
width: 60%;
display: flex;
align-item: center;
justify-content: space-between;
`;
const Right = styled.div`

`;

const Logo = styled.img`
height: 50px;
border-radius: 100%;
cursor: pointer;
`;


const Menu = styled.ul`
display: flex;
list-style: none;
`;

const MenuItem = styled.li`
margin-right: 30px;
font-size: 20px;
font-weight: bold;
color: gray;
`;

const NavBar = () => {
  return (
    <Container id='home' style={{position: "fixed",
    zIndex: 3}} >
     <Wrapper >
        <Left>
          <a href="#home">
            <Logo src="/assets/Logo-byn.png" alt="Logo Walter Tapizados" />
          </a>
            <Menu> 
                <MenuItem>Home</MenuItem>
                <MenuItem>Galeria de Fotos</MenuItem>
                <MenuItem>Demo</MenuItem>
                <MenuItem>Contacto</MenuItem>
            </Menu>
        </Left>
        <Right>
          <a href="https://www.instagram.com/waltertapizados/" target="_blank" rel="noopener noreferrer">
          <Logo src="/assets/instagram.png" alt="Instagram Walter Tapizados"/>
          </a>
        </Right>
     </Wrapper>
    </Container>
  )
}

export default NavBar;