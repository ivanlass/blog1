import React from 'react';
import couple from '../photos/couple.jpg'
import styled from 'styled-components'
import { isBrowser } from "react-device-detect";

const Img = styled.div`
width:100vw;
height:70vh;
background: url(${couple});
background-position:center;
background-repeat:no-repeat;
background-size:cover;
`

const Div = styled.div`
width:50%;
height:70vh;
background: white;
opacity: .9;
display: grid;
  @media (max-width: 768px) {
    -webkit-box-shadow: 4px 0px 92px -6px rgba(255,255,255,1);
-moz-box-shadow: 4px 0px 92px -6px rgba(255,255,255,1);
box-shadow: 4px 0px 92px -6px rgba(255,255,255,1);
  }
`

const Button = styled.button`
border:none;
width: 300px;
background-image: linear-gradient(to right, #f12711, #f5af19);
padding: 20px 0px;
cursor: pointer;
font-size:20px;
border-radius: 5px;
box-shadow: 0px 10px 30px -10px #f12711;
color: white;
position:absolute;
left: 15%;
top: 50%;

@media (max-width: 768px) {
    left: 10%;
  }
`

const BigTxt = styled.h4`
display:block;
color: #616161;
background: linear-gradient(to right, #f12711, #f5af19);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
padding:90px;
line-height:3;
margin-top:40px;
@media (max-width: 1000px) {
    padding:15px;
line-height:2;
margin-top:20px;
font-size: 22px;
  }
  @media (max-width: 768px) {
    padding:5px;
line-height:1;
margin-top:20px;
font-size: 16px;
  }
`

function Hero() {
  console.log(isBrowser)
  return (
    <Img >
      <Div>
        <BigTxt>Till skillnad från många dejtingsajter tror vi att det är onödigt att ha miljoner medlemmar för att träffa rätt person. I själva verket är vår strategi att samla individer som är bästa affinitet och involverade i deras forskning. Möjligheterna är så stora möten tiofaldiga! Tack för att du läser !</BigTxt>
      </Div>
      <a href={isBrowser ? "https://trackoptimise.com/?a=10438&c=65781&s1=006" : "https://trackoptimise.com/?a=10438&c=65750&s1=006"}>
        <Button>Klicka och börja äventyr</Button>
      </a>
    </Img>
  );
}

export default Hero;
