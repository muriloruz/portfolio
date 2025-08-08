import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/logo.svg'
import user_icon from '../../assets/user_icon.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll';
const Footer = () => {
  return (
    <div className='footer' translate="no">
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo} alt="" />
                <p>Eu sou Murilo, desenvolvedor back-end!</p>
            </div>
            <div className="footer-top-right">
                <AnchorLink href="#contect"><div className="footer-subscribe">Enviar Mensagem!</div></AnchorLink>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <div className="footer-bottom-left">
               <p>© 2025 Murilo Ruz. All rights reserved.</p>
            </div>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <a href="https://www.linkedin.com/in/murilo-ruz-soares-21ba7222a/"><p>Connect with me</p></a>
           </div>
        </div>
    </div>
  )
}

export default Footer