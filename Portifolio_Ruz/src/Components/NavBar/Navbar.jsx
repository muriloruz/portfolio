import React from 'react'
import { useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import { useState } from 'react'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_icon from '../../assets/menu_open.svg'
import close_icon from '../../assets/menu_close.svg'
const Navbar = () => {
  const [menu, setMenu] = React.useState(false);
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right="0px";
  }

  const closeMenu = () => {
    menuRef.current.style.right="-350px";
  }

  return (
    <div className='navbar'>
        <img src={logo} alt="" />
        <img src={menu_icon} onClick={openMenu} alt="" className='nav-mob-open'/>
        <ul ref ={menuRef} className="nav-menu">
          <img src={close_icon} onClick={closeMenu} alt="" className="nav-mob-close" />
            <li><AnchorLink className='anchor-link' href="#home"><p onClick={()=> setMenu("home")}>Home</p></AnchorLink>{menu==="home"? <img src={underline} alt=''/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href="#about"><p  onClick={()=> setMenu("about")}>Sobre</p></AnchorLink>{menu==="about"? <img src={underline} alt=''/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href="#services"><p  onClick={()=> setMenu("services")}> Serviços</p></AnchorLink>{menu==="services"? <img src={underline} alt=''/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href="#work"><p  onClick={()=> setMenu("work")}>Portfólio</p></AnchorLink>{menu==="work"? <img src={underline} alt=''/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href="#contect"><p  onClick={()=> setMenu("contact")}>Contato</p></AnchorLink>{menu==="contact"? <img src={underline} alt=''/>:<></>}</li>
        </ul>
        <div className="nav-connector"><AnchorLink className='anchor-link' offset={50} href="#contect"><p  onClick={()=> setMenu("contact")}>Fale comigo!</p></AnchorLink></div>
    </div>
  )
}

export default Navbar