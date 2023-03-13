import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
heigth: 50px;
width: 100%;
border-bottom: gray 2px dashed;
background-color: white;
@media screen and (max-width: 768px) {
      display: flex;
      justify-content: space-between;
      align-items: center;
  }
`;

const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
justify-content: space-between;
align-item: center;
`;

const Left = styled.div`
width: 100%;
display: flex;
align-item: center;
justify-content: space-between;
`;
const Right = styled.div`
@media screen and (max-width: 768px) {
 display: flex;
 }
`;

const Logo = styled.img`
height: 45px;
border-radius: 100%;
cursor: pointer;
justify-content: space-between;
@media screen and (max-width: 768px) {
  height: 35px;
  display: flex;
  align-items: center;
  }
`;


const Menu = styled.ul`
display: flex;
list-style: none;
@media screen and (max-width:768px) {
  height: 40px;
  display: flex;
  align-items: center;
  }
`;

const MenuItem = styled.li`
margin-right: 30px;
font-size: 20px;
font-weight: bold;
color: gray;
@media screen and (max-width: 768px) {
  font-size: 15px;
  }
`;

const NavBar = () => {
  return (
    <Container id='home'>
     <Wrapper >
        <Left>
          <a href="#home">
            <Logo src="/assets/Logo-byn.png" alt="Logo Walter Tapizados" style={{height: "55px", position:"fixed"}} />
          </a>
            <Menu style={{cursor:"pointer"}} className="menu"> 
               <a href="#galeria" style={{textDecoration:"none"}} ><MenuItem className="menuItem">Fotos</MenuItem></a> 
               <a href="#Demo" style={{textDecoration:"none"}} ><MenuItem className="menuItem">Demo</MenuItem></a> 
               <a href="#contacto" style={{textDecoration:"none"}} ><MenuItem className="menuItem">Contacto</MenuItem></a>
            </Menu>
        <Right>
          <a href="https://www.instagram.com/waltertapizados/" target="_blank" rel="noopener noreferrer">
          <Logo src="/assets/instagram.png" alt="Instagram Walter Tapizados" height={"40px"} className="logo"/>
          </a>
          <a href="https://wa.me/5493425972698/?text=Estoy%20interesado%20en%20su%20servicio" target="_blank" rel="noopener noreferrer"><Logo className="logo" src="/assets/whatsapp.png" alt="Instagram Walter Tapizados" height={"40px"} style={{marginLeft: "10px"}}/></a>
        </Right>
        </Left>
     </Wrapper>
    </Container>
  )
}

export default NavBar;