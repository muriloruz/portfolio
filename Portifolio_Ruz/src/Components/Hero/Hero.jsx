import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll';
const Hero = () => {
  return (
    <div id="home" className='hero' translate="no">
        <img src={profile_img} className='img_profile' />
        <h1><span>Olá, eu sou Murilo Ruz!</span></h1>
        <p>Sou desenvolvedor back-end em Santana de Parnaíba, São Paulo. Recentemente me formei em Análise e Desenvolvimento de Sistemas pela FATEC e também possuo um curso técnico em Informática para Internet pela ETEC.</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' href="#contect">Entrar em contato</AnchorLink></div>
            <a href="/CurriculoMuriloRuz.pdf" download className='anchor-link'><div className="hero-resume">Meu currículo</div></a>
        </div>
    </div>
  )
}

export default Hero