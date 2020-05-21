import React from 'react';
import group from '../photos/group.jpg'
import styled from 'styled-components'
import { FaHeart, FaGlobeEurope, FaRocketchat } from "react-icons/fa";


const Div = styled.div`
margin-top: 100px;
padding-top: 60px;
width:100vw;
height:100vh;
background-color: #f12711;
background-image: url(${group});
background-position:center;
background-repeat:no-repeat;
background-size:cover;
background-attachment: fixed;
background-blend-mode: multiply;
${({ active }) => active && `
    background: rgb(247, 247, 247);
  `}
@media (max-width: 768px) {
    height:150vh;
  }
`

const H1 = styled.h1`
color: #fefe;
text-align:center;
font-size: 25px;
font-weight:100;
`

const H2 = styled.h2`
color: #454545;
font-weight:100;
padding:15px;
`
const H3 = styled.h3`
color: #5e5e5e;
padding:15px;
`

const Wrapper = styled.div`
background: rgb(247, 247, 247);
text-align:center;
padding:20px;
margin-top: 180px;
color: #3d3d3d;
@media (max-width: 768px) {
    margin-top: 20px;
  }
`

const Item = styled.div`
    box-sizing:border-box;
    display:inline-block;
    margin:30px;
    width:30%;
    @media (max-width: 768px) {
    width: 80%;
    font-size:10px;
    color:#5e5e5e;
  }
`


function Advantages() {
    return (
        <Div active={window.navigator.userAgent.indexOf('Edge') != -1}>
            <H1>Gratis tillgång till vår datingsplattform. FLIRT _ CHAT _ HAR GYCKET</H1>
            <Wrapper>
                <Item>
                    <FaHeart size={70} />
                    <H2>Mansion kärlek</H2>
                    <H3>Din fantasi kan göra mycket. Dela dina känslor av lust och äventyr på rätt plats. Glöm det dåliga!</H3>
                </Item>
                <Item>
                    <FaGlobeEurope size={70} />
                    <H2>Anonymiteten kommer först</H2>
                    <H3>När du börjar känna dig säker på sidan med dina drömmar, har du rätt plats där du vill stanna för evigt!</H3>
                </Item>
                <Item>
                    <FaRocketchat size={70} />
                    <H2>Låt oss börja äventyret!</H2>
                    <H3>När du skapar din profil har du möjlighet att kontakta nya människor och sökningen efter en vän eller partner kan börja!</H3>
                </Item>
            </Wrapper>
        </Div>
    );
}

export default Advantages;
