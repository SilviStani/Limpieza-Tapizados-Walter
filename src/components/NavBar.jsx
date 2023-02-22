import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
heigth: 50px;
background-color: rgba(255, 255, 255, 0.65);
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

const Logo = styled.img`
height: 50px;
border-radius: 100%;
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
    <Container>
     <Wrapper>
        <Left>
            <Logo src="/assets/Logo-byn.png" alt="Logo Walter Tapizados"/>
            <Menu> 
                <MenuItem>Home</MenuItem>
                <MenuItem>Features</MenuItem>
                <MenuItem>Services</MenuItem>
                <MenuItem>Pricing</MenuItem>
                <MenuItem>Contact</MenuItem>
            </Menu>
        </Left>
     </Wrapper>
    </Container>
  )
}

export default NavBar;