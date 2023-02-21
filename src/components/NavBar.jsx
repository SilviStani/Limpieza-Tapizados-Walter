import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
heigth: 50px;
background-color: rgba(255, 255, 255, 0.65);
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

const Logo = styled.h1`
font-weight: bold;
text-decoration: underline crimson;
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

const Button = styled.button`
font-size: 20px;
border: 2px solid white;
padding: 10px 15px;
background-color: green;
color: white;
font-weight: bold;
border-radius: 10px;
cursor: pointer;
`;

const NavBar = () => {
  return (
    <Container>
     <Wrapper>
        <Left>
            <Logo>Walter Tapizados</Logo>
            <Menu>
                <MenuItem>Home</MenuItem>
                <MenuItem>Features</MenuItem>
                <MenuItem>Services</MenuItem>
                <MenuItem>Pricing</MenuItem>
                <MenuItem>Contact</MenuItem>
            </Menu>
        </Left>
            <a href="https://wa.me/+5493425972698" target="blank"><Button>Whatsapp</Button></a>
     </Wrapper>
    </Container>
  )
}

export default NavBar;