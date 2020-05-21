import React, { Component } from "react";
import Slider from "react-slick";
import styled from 'styled-components'
import { isBrowser } from "react-device-detect";



import agnes from '../photos/agnes.png'
import amanda from '../photos/amanda.png'
import emma from '../photos/emma.png'
import klara from '../photos/klara.png'
import sara from '../photos/sara.png'
import sonja from '../photos/sonja.png'
import vanessa from '../photos/vanessa.png'



const Div = styled.div`
margin: 10px;
height:200px;
background-position:center;
background-repeat:no-repeat;
background-size:contain;
`

const H1 = styled.h1`
text-align:center;
color: #5e5e5e;
font-weight: 100;

`
const Name = styled.h2`
text-align:center;
color: #5e5e5e;
font-weight: 400;

`



export default class Girls extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 3,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div >
                <div style={{ marginTop: 60 }}>
                    <H1>De bästa medlemmarna!</H1>
                    <Slider {...settings}>
                        <div >
                            <a href={isBrowser ? "https://trackoptimise.com/?a=10438&c=65781&s1=006" : "https://trackoptimise.com/?a=10438&c=65750&s1=006"}>
                                <Div style={{ cursor: "pointer", backgroundImage: `url(${agnes})` }}></Div>
                                <Name>Agnes 35</Name>
                            </a>
                        </div>
                        <div >
                            <a href={isBrowser ? "https://trackoptimise.com/?a=10438&c=65781&s1=006" : "https://trackoptimise.com/?a=10438&c=65750&s1=006"}>
                                <Div style={{ cursor: "pointer", backgroundImage: `url(${amanda})` }}></Div>
                                <Name>Amanda 30</Name>
                            </a>
                        </div>
                        <div >
                            <a href={isBrowser ? "https://trackoptimise.com/?a=10438&c=65781&s1=006" : "https://trackoptimise.com/?a=10438&c=65750&s1=006"}>
                                <Div style={{ cursor: "pointer", backgroundImage: `url(${emma})` }}></Div>
                                <Name>Emma 29</Name>
                            </a>
                        </div>
                        <div >
                            <a href={isBrowser ? "https://trackoptimise.com/?a=10438&c=65781&s1=006" : "https://trackoptimise.com/?a=10438&c=65750&s1=006"}>
                                <Div style={{ cursor: "pointer", backgroundImage: `url(${sonja})` }}></Div>
                                <Name>Sonja 33</Name>
                            </a>
                        </div>
                        <div >
                            <a href={isBrowser ? "https://trackoptimise.com/?a=10438&c=65781&s1=006" : "https://trackoptimise.com/?a=10438&c=65750&s1=006"}>
                                <Div style={{ cursor: "pointer", backgroundImage: `url(${sara})` }}></Div>
                                <Name>Sara 31</Name>
                            </a>
                        </div>
                        <div >
                            <a href={isBrowser ? "https://trackoptimise.com/?a=10438&c=65781&s1=006" : "https://trackoptimise.com/?a=10438&c=65750&s1=006"}>
                                <Div style={{ cursor: "pointer", backgroundImage: `url(${klara})` }}></Div>
                                <Name>Klara 33</Name>
                            </a>
                        </div>
                        <div >
                            <a href={isBrowser ? "https://trackoptimise.com/?a=10438&c=65781&s1=006" : "https://trackoptimise.com/?a=10438&c=65750&s1=006"}>
                                <Div style={{ cursor: "pointer", backgroundImage: `url(${vanessa})` }}></Div>
                                <Name>Vanessa 34</Name>
                            </a>
                        </div>
                    </Slider>
                </div>
            </div >
        );
    }
}