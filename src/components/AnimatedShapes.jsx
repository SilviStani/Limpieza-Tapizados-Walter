import React from 'react'
import styled from 'styled-components'

const Square = styled.div`
width: 60px;
height: 60px;
background-color: crimson;
top: 300vh;
left:0px ;
position: absolute;

animation: square 8s linear alternate infinite;

@keyframes square{
    to{
        transform: translate(50vw, 90vh);
    }
}
`;
const Straight = styled.div`
width: 100px;
height: 30px;
background-color: yellow;
opacity: 0.7;
top: 300vh;
left:0px ;
position: absolute;
animation: straight 12s linear alternate infinite;

@keyframes straight{
    to{
        transform: translate(50vw, 80vh);
    }
}
`;

const Circle = styled.div`
width: 100px;
height: 100px;
border-radius: 100%;
background-color: Green;
bottom: -300vh ;
left:0px ;
position: absolute;

opacity: 0.7;
animation: circle 10s linear alternate infinite;

@keyframes circle{
    to{
        transform: translate(50vw, -90vh);
    }
}
`;

const AnimatedShapes = () => {
  return (
    <>
    <Square/>
    <Circle />
    <Straight/>
    </>
  )
}

export default AnimatedShapes