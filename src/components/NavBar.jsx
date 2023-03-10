import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
heigth: 50px;
width: 100%;
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
box-shadow: 2px 2px 6px 4px gray;
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
    <Container id='home' >
     <Wrapper >
        <Left>
          <a href="#home">
            <Logo src="/assets/Logo-byn.png" alt="Logo Walter Tapizados" style={{position:"fixed"}}/>
          </a>
            <Menu style={{cursor:"pointer"}}> 
               <a href="#galeria" style={{textDecoration:"none"}}><MenuItem>Galeria de Fotos</MenuItem></a> 
               <a href="#Demo" style={{textDecoration:"none"}}><MenuItem>Demo</MenuItem></a> 
               <a href="#contacto" style={{textDecoration:"none"}}><MenuItem >Contacto</MenuItem></a>
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