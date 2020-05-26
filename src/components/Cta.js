import React from 'react';
import styled from 'styled-components'
import { isBrowser } from "react-device-detect";

const Button = styled.button`
border:none;
width: 200px;
background-image: linear-gradient(to right, #f12711, #f5af19);
padding: 20px 0px;
cursor: pointer;
border-radius: 5px;
box-shadow: 0px 10px 30px -10px #f12711;
color: white;
margin: 300px auto;
font-size:20px;

@media (max-width: 768px) {
    margin: 100px auto;
  }
`

const Wrapper = styled.div`
height:70vh;
width: 100vw;
text-align:center;
`

function Cta() {
    return (
        <Wrapper>
            <a href={isBrowser ? "https://trackoptimise.com/?a=10438&c=65781&s1=006" : "https://trackoptimise.com/?a=10438&c=65750&s1=006"}>
                <Button>Gratis konto</Button>
            </a>
        </Wrapper>
    );
}

export default Cta;
