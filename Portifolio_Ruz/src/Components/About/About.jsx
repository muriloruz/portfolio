import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.JPG'
const About = () => {
    return (
        <div id="about" className='about'>
            <div className="about-title">
                <h1>Sobre mim</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="" id="imagem" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>Possuo 5 anos de estudo em programação. Comecei na ETEC durante o ensino médio, no qual apreendi a linguagem C++, continuei na área de programação e ingressei na FATEC em busca de mais conhecimento. Já trabalhei em projetos tanto no front-end quanto no back-end. Domino linguagens como Java, C#, Python, Mysql e Javascript. </p>
                        <p>No front-end trabalhei principalmente com React, já no back-end trabalhei com Java, C#, JS e Mysql. Também possuo conhecimento no desenvolvimento mobile com a linguagem Java da plataforma AndroidStudio e o framework Flutter da linguagem Dart.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>Java</p><hr style={{ width: "70%" }} /></div>
                        <div className="about-skill"><p>Flutter</p><hr style={{ width: "43%" }} /></div>
                        <div className="about-skill"><p>Python</p><hr style={{ width: "65%" }} /></div>
                        <div className="about-skill"><p>JavaScript</p><hr style={{ width: "56%" }} /></div>
                    </div>
                </div>
            </div>
            <div className="about-achivements">
                <div className="about-achivement">
                    <h1>15+</h1>
                    <p>CERTIFICADOS DA ÁREA</p>
                </div>
                <hr />
                <div className="about-achivement">
                    <h1>2</h1>
                    <p>ANOS DE EXPERIÊNCIA</p>
                </div>
                <hr />
                <div className="about-achivement">
                    <h1>25+</h1>
                    <p>PROJETOS FINALIZADOS</p>
                </div>
            </div>
        </div>
    )
}

export default About