import React from 'react';
import { FaGithub, FaLinkedin, FaGlobe, FaWhatsapp } from 'react-icons/fa';
import apiNinjasLogo from "../assets/apininjas_logo.png"
import styled from 'styled-components';
import dogHappy from '../assets/dogHappy.png'
import DownloadButton from './DownloadButton';

const Footer = () => {
    return (
        <Main>
            <div className="card-footer" style={{ margin: "20px" }}>
                <a className="social-link1"
                    href="https://github.com/marleopr"
                    alt="GitHub"
                    title="GitHub"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub />
                </a>
                <a className="social-link2"
                    href="https://www.linkedin.com/in/marleopiber/"
                    alt="Linkedin"
                    title="Linkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaLinkedin />        </a>
                <a className="social-link3"
                    href="https://marleo-portfolio.vercel.app/"
                    alt="Portfólio"
                    title="Portfólio"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGlobe />
                </a>
                <a className="social-link4"
                    href="https://whats.link/marleopr"
                    alt="WhatsApp"
                    title="WhatsApp"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaWhatsapp />
                </a>
            </div>
            <DownloadButton />
            <div style={{ display: "flex", flexDirection: "column", textAlign: 'center' }}>
                <p style={{ margin: 0, color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    Márleo Piber • Full Stack Developer © 2023 •
                    Desenvolvido com a API
                    <a href={'https://api-ninjas.com/'} target="_blank" rel="noopener noreferrer">
                        <img style={{ width: "80px", marginLeft: "5px" }} src={apiNinjasLogo} alt='Brapi' />
                    </a>
                </p>
            </div>
        </Main>
    );
};

export default Footer;
const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    bottom: 0;
    width: 100%;
    box-sizing: border-box;
    text-align: center;
    background-image: url(${dogHappy});
    background-position: left;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: radial-gradient(circle, rgba(33,33,33,1) 0%, rgba(1,21,34,1) 100%);
    background-size: 250px;
    @media screen and (max-device-width: 480px) {
        background-position: center;
  }
`