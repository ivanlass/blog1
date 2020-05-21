import React from 'react';
import styled from 'styled-components'
import dating from '../photos/dating.jpg'



const H1 = styled.h1`
padding: 10px 100px;
color: #363636;
margin-top: 30px;
background: rgb(255,255,255, .2);
@media (max-width: 768px) {
  padding: 10px 10px;
  font-size:20px;
  }
`

const H3 = styled.h3`
color: white;
background: linear-gradient(to right, #f12711, #f5af19);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 30px;
`

const P = styled.p`
color: #5e5e5e;
margin: 10px;
`


const Main = styled.div`
text-align: center;
height: 100vh;
background: url(${dating});
background-repeat:no-repeat;
background-size:contain;
background-position:center;
@media (max-width: 768px) {
    background-size:contain;
  }
`

function Testimonials() {
  return (
    <Main >
      <H1>Det skiljer dig väldigt lite från din perfekta partner. Ett klick räcker för att komma i kontakt med våra användare över hela landet.
Håll inte tillbaka och starta dina vackraste och spännande äventyr</H1>

    </Main>
  );
}

export default Testimonials;
